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
		if (params.O && !meetings[i].types.includes("O")) shouldKeep = false;
		if (params.C && !meetings[i].types.includes("C")) shouldKeep = false;
		if (params.M && !meetings[i].types.includes("M")) shouldKeep = false;
		if (params.W && !meetings[i].types.includes("W")) shouldKeep = false;
		if (params.X && !meetings[i].types.includes("X")) shouldKeep = false;
		if (params.LGBTQ && !meetings[i].types.includes("LGBTQ")) shouldKeep = false;
		if (params.S && !meetings[i].types.includes("S")) shouldKeep = false;
		if (params.CF && !meetings[i].types.includes("CF")) shouldKeep = false;
		if (params.ASL && !meetings[i].types.includes("ASL")) shouldKeep = false;
		if (params.AL && !meetings[i].types.includes("AL-AN")) shouldKeep = false;
		if (params.Y && !meetings[i].types.includes("Y")) shouldKeep = false;
		if (params.P && !meetings[i].types.includes("SP")) shouldKeep = false;
		if (params.name && !(meetings[i].name.toLowerCase().includes(params.name.toLowerCase()))) shouldKeep = false;
		if (params.city && !(meetings[i].city.toLowerCase() == params.city.toLowerCase())) shouldKeep = false;
		if (params.zipcode && !(meetings[i].postalcode == params.zipcode)) shouldKeep = false;
		if (params.district && !(meetings[i].district == params.district)) shouldKeep = false;
		if (params.F2F && meetings[i].types.includes("TC")) shouldKeep = false;
		if (params.online && !meetings[i].types.includes("ONL")) shouldKeep = false;

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
		X: getUrlVar("handi")==1, 
		LGBTQ: getUrlVar("lgbt")==1, 
		S: getUrlVar("spanish")==1, 
		CF: getUrlVar("kid")==1, 
		ASL: getUrlVar("asl")==1, 
		AL: getUrlVar("alanon")==1, 
		Y: getUrlVar("young")==1, 
		P: getUrlVar("speaker")==1,
		name: decodeQS(getUrlVar("name")),
		city: decodeQS(getUrlVar("city")),
		zipcode: getUrlVar("zipcode"),
		district: getUrlVar("district"),
		F2F: getUrlVar("facetoface")==1,
		online: getUrlVar("online")==1,
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
	return qString;
}