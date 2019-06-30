// Create Query Function and Helper Functions

function processMeetings(meetings){
	
	let urlParameters = processURLQueryString();

	meetings = filterMeetings(meetings, urlParameters);

	createMeetingArray(meetings, urlParameters);
}

function filterMeetings(meetings, params) {
	let rawArraysOfMeetings = [[],[],[],[],[],[],[]];
	for (let i=0; i<meetings.length; i++) {

		// checks for any set parameters (besides days) and will toss meetings that don't match
		let = shouldKeep = true;
		if (params.open && !meetings[i].types.includes("O")) shouldKeep = false;
		if (params.closed && !meetings[i].types.includes("C")) shouldKeep = false;
		if (params.men && !meetings[i].types.includes("M")) shouldKeep = false;
		if (params.woman && !meetings[i].types.includes("W")) shouldKeep = false;
		if (params.handi && !meetings[i].types.includes("X")) shouldKeep = false;
		if (params.lgbt && !meetings[i].types.includes("LGBTQ")) shouldKeep = false;
		if (params.spanish && !meetings[i].types.includes("S")) shouldKeep = false;
		if (params.kid && !meetings[i].types.includes("CF")) shouldKeep = false;
		if (params.asl && !meetings[i].types.includes("ASL")) shouldKeep = false;
		if (params.alanon && !meetings[i].types.includes("AL-AN")) shouldKeep = false;
		if (params.young && !meetings[i].types.includes("Y")) shouldKeep = false;
		if (params.speaker && !meetings[i].types.includes("SP")) shouldKeep = false;
		if (params.name && !meetings.name.toLowerCase() == params.name) shouldKeep = false;
		if (params.city && !meetings.city.toLowerCase() == params.city) shouldKeep = false;
		if (params.zipcode && !meetings.postal_code == params.zipcode) shouldKeep = false;

		// sort into array for that day of the week if not tossed
		if(meetings[i].day == "0" && shouldKeep){
			rawArraysOfMeetings[0].push(meetings[i]);
		} else if (meetings[i].day == "1" && shouldKeep){
			rawArraysOfMeetings[1].push(meetings[i]);
		} else if (meetings[i].day == "2" && shouldKeep){
			rawArraysOfMeetings[2].push(meetings[i]);
		} else if (meetings[i].day == "3" && shouldKeep){
			rawArraysOfMeetings[3].push(meetings[i]);
		} else if (meetings[i].day == "4" && shouldKeep){
			rawArraysOfMeetings[4].push(meetings[i]);
		} else if (meetings[i].day == "5" && shouldKeep){
			rawArraysOfMeetings[5].push(meetings[i]);
		} else if (meetings[i].day == "6" && shouldKeep){
			rawArraysOfMeetings[6].push(meetings[i]);
		}
	}
	console.log(rawArraysOfMeetings);
	return rawArraysOfMeetings;
}

function processURLQueryString(){
	// creates dictionary of url query parameters
	let urlParameters = {
		SUN: getUrlVar("sunday")==1, 
		MON: getUrlVar("monday")==1, 
		TUE: getUrlVar("tuesday")==1, 
		WED: getUrlVar("wednesday")==1, 
		THU: getUrlVar("thursday")==1, 
		FRI: getUrlVar("friday")==1, 
		SAT: getUrlVar("saturday")==1, 
		O: getUrlVar("open")==1, 
		C: getUrlVar("closed")==1, 
		M: getUrlVar("men")==1, 
		W: getUrlVar("woman")==1, 
		H: getUrlVar("handi")==1, 
		G: getUrlVar("lgbt")==1, 
		S: getUrlVar("spanish")==1, 
		KF: getUrlVar("kid")==1, 
		SI: getUrlVar("asl")==1, 
		AL: getUrlVar("alanon")==1, 
		YP: getUrlVar("young")==1, 
		SM: getUrlVar("speaker")==1,
		name: decodeQS(getUrlVar("name")),
		city: decodeQS(getUrlVar("city")),
		zipcode: getUrlVar("zipcode")
	};
	return urlParameters;
}

// helper function to get URL Parameter from https://gist.github.com/varemenos/2531765
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}

// helper function to replace + signs in query string with space
function decodeQS(qString){
	qString = qString.replace(/\+/g, '%20');
	qString = decodeURIComponent(qString);
	return qString.toLowerCase();
}