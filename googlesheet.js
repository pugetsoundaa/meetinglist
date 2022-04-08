// Translates Google Sheet JSON into Meeting Guide Format JSON

function googlesheet(gs_id){
	//v3 Google Sheets API
	//let gs_src = "https://spreadsheets.google.com/feeds/list/" + gs_id + "/1/public/values?alt=json";
	
	//v4 Google Sheets API
	let gs_src = "https://sheets.googleapis.com/v4/spreadsheets/13W4lBuRWKpnHNOC_3wTXI5anLVOkyvMmyn4Wvqx1z3c/values/A1:ZZ?key=AIzaSyAdMoeqxk-EWspUIJDwN7GBSwWSzgL6E5A";

	$.getJSON(gs_src, function(data){
		let meetings = [];

		//v3 Google Sheets API
		//for (let i = 0; i < data.feed.entry.length; i++) {
		
		//v4 Google Sheets API	
		//loop through all rows/meetings, skipping the first row of spreadsheet since it's the column headers
		for (let i = 1; i < data.values.length; i++) {		
			
			//v3 Google Sheets API
			//goes through raw data and creates a meeting object with properties for each column of the Google Sheet
			/*let meeting = {};
			$.map(data.feed.entry[i], function(v, i){
				if (i.substr(0, 4) == 'gsx$') {
					meeting[i.substr(4)] = v['$t'];
				}
			});*/

			//v4 Google Sheets API
			//creates the meeting object with properties based on the column headers
			
			let meeting = {};

			for (let j = 0; j < data.values[0].length; j++) {
				meeting[data.values[0][j]] = data.values[i][j];

			}
			console.log(meeting);

			//v3 Google Sheets API
			//use Google-generated slug if none was provided
			/*if (!meeting.slug) {
				let slug = data.feed.entry[i].id['$t'];
				meeting.slug = slug.substring(slug.lastIndexOf('/') + 1);
			}*/

			//v4 Google Sheets API
			if (!meeting.slug) {
				meeting.slug = "psaa" + i;
			}

			console.log(meeting);

			//convert time to HH:MM
			let timeTemp = meeting.time.toLowerCase();
			if (timeTemp.includes('am')) {
				meeting.time =  timeTemp.substring(0, timeTemp.indexOf(' am'));
				if (meeting.time == '12:00') {
					let [ tempHours, tempMinutes ] = meeting.time.split(':');
					tempHours = parseInt(tempHours) + 12;
					meeting.time = tempHours + ':' + tempMinutes;
				}
			} else if (timeTemp.includes('pm')) {
				timeTemp = timeTemp.substring(0, timeTemp.indexOf(' pm'));
				let [ tempHours, tempMinutes ] = timeTemp.split(':');
				if (tempHours != '12') tempHours = parseInt(tempHours) + 12;
				meeting.time = tempHours + ':' + tempMinutes;
			}

			//format day
			if (Number.isInteger(meeting.day)) {
				//convert day to string if integer
				meeting.day = meeting.day.toString();
			} else if (settings.days.includes(meeting.day)) {
				meeting.day = settings.days.indexOf(meeting.day).toString();
			}

			//format types
			meeting.types = meeting.types.split(',');
			meeting.types = meeting.types.map(type => type.trim()).filter(type => type.length);
			const lookup_type = {};
			for (let code in settings.types) {
				lookup_type[settings.types[code]] = code;
			}
			for (let j = 0; j < meeting.types.length; j++) {
				if (meeting.types[j] in lookup_type) {
					meeting.types[j] = lookup_type[meeting.types[j]];
				}
			}
			meeting.types = meeting.types.filter(type => type in settings.types).sort();

			meetings.push(meeting);
		}

		processMeetings(meetings);
	});
}

const settings = {
	days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	types: {
		'11': '11th Step Meditation',
		'12x12': '12 Steps & 12 Traditions,',
		ASBI: 'As Bill Sees It',
		BA: 'Babysitting Available',
		B: 'Big Book',
		H: 'Birthday',
		BRK: 'Breakfast',
		AN: 'Candlelight',
		CF: 'Child-Friendly',
		C: 'Closed',
		'AL-AN': 'Concurrent with Al-Anon',
		AL: 'Concurrent with Alateen',
		XT: 'Cross Talk Permitted',
		DR: 'Daily Reflections',
		DB: 'Digital Basket',
		D: 'Discussion',
		DD: 'Dual Diagnosis',
		EN: 'English',
		FF: 'Fragrance Free',
		FR: 'French',
		G: 'Gay',
		GR: 'Grapevine',
		NDG: 'Indigenous',
		ITA: 'Italian',
		JA: 'Japanese',
		KOR: 'Korean',
		L: 'Lesbian',
		LIT: 'Literature',
		LS: 'Living Sober',
		LGBTQ: 'LGBTQ',
		MED: 'Meditation',
		M: 'Men',
		N: 'Native American',
		NL: 'No Location',
		BE: 'Newcomer',
		NS: 'Non-Smoking',
		O: 'Open',
		ONL: 'Online Meeting',
		POC: 'People of Color',
		POL: 'Polish',
		POR: 'Portuguese',
		P: 'Professionals',
		PUN: 'Punjabi',
		RUS: 'Russian',
		A: 'Secular',
		ASL: 'Sign Language',
		SM: 'Smoking Permitted',
		S: 'Spanish',
		SP: 'Speaker',
		ST: 'Step Meeting',
		TC: 'Temporarily Closed',
		TR: 'Tradition Study',
		T: 'Transgender',
		X: 'Wheelchair Access',
		XB: 'Wheelchair-Accessible Bathroom',
		W: 'Women',
		Y: 'Young People'
	}
}