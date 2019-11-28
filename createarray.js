// Create Meeting Array Function and Helper Functions

function createMeetingArray(rawArraysOfMeetings, urlParameters){

	// creates an array of 7 arrays of meeting objects for each day of the week
	let processedArraysOfMeetings = new Array(7);
	for(let i = 0; i< 7; i++){
		processedArraysOfMeetings[i] = createDayMeetingObjectArray(rawArraysOfMeetings[i]);
	}

	// if any day(s) of the week are specified in the query, sets non selected days to empty arrays
	if(urlParameters.SUN || urlParameters.MON || urlParameters.TUE || urlParameters.WED || urlParameters.THU || urlParameters.FRI || urlParameters.SAT){
		if(!urlParameters.SUN){
			processedArraysOfMeetings[0] = [];
		}
		if(!urlParameters.MON){
			processedArraysOfMeetings[1] = [];
		}
		if(!urlParameters.TUE){
			processedArraysOfMeetings[2] = [];
		}
		if(!urlParameters.WED){
			processedArraysOfMeetings[3] = [];
		}
		if(!urlParameters.THU){
			processedArraysOfMeetings[4] = [];
		}
		if(!urlParameters.FRI){
			processedArraysOfMeetings[5] = [];
		}
		if(!urlParameters.SAT){
			processedArraysOfMeetings[6] = [];
		}
	}

	createMeetingList(processedArraysOfMeetings, urlParameters);
}

function createDayMeetingObjectArray(rawData){
	let numRows = rawData.length;
	let arrayOfMeetingObjects = new Array(numRows);

	for(let i = 0; i < numRows; i++){
		let name = rawData[i].name;
		let stime = rawData[i].time;
		let address = rawData[i].address;
		let city = rawData[i].city;
		let zipcode = rawData[i].postalcode;
		let location = rawData[i].location;
		let webnotes = rawData[i].notes;
		let lupdate = rawData[i].updated;
		let open = rawData[i].types.includes("O");
		let mens = rawData[i].types.includes("M");
		let womens = rawData[i].types.includes("W");
		let handi = rawData[i].types.includes("X");
		let lgbtq = rawData[i].types.includes("LGBTQ");
		let spanish = rawData[i].types.includes("S");
		let kid = rawData[i].types.includes("CF");
		let si = rawData[i].types.includes("ASL");
		let alanon = rawData[i].types.includes("AL-AN");
		let young = rawData[i].types.includes("Y");
		let speaker = rawData[i].types.includes("SP");
		let district = rawData[i].district;
		
		// call the meeting object constructor
		let meeting = new Meeting(name, stime, address, city, zipcode, location, webnotes, lupdate, open, mens, womens, handi, lgbtq, spanish, kid, si, alanon, young, speaker, district);	
		arrayOfMeetingObjects[i] = meeting;
	}
	return arrayOfMeetingObjects;
}