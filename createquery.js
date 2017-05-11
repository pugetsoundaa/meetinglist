// Create Query Function and Helper Functions

function createMeetingQuery(){
	// sets the initial search query to the Google Sheet address
	let googleSheetURL = "https://docs.google.com/spreadsheets/d/1fLxXxKFIiuPJOuTTNzAn1S0rmgjRQhFxqDNZabACIcI/edit?usp=sharing";
	
	// creates a global variable to store a dictionary of the booleans after processing the URL query string
	smlURLparameters = processURLQueryString();

	// creates the search query
	let searchQuery = addSelections();
	console.log(searchQuery);
	// creates the Query object and sends the QueryResponse object to processQuery function 
	let searchQueryObject = new google.visualization.Query(googleSheetURL);
	searchQueryObject.setQuery(searchQuery);
	searchQueryObject.send(processQuery);
}

function processQuery(queryResponse){
	// recieves the QueryResponse object and then sends a DataTable object to createMeetingArray function
	createMeetingArray(queryResponse.getDataTable());
}

function processURLQueryString(){
	// creates dictionary with all initially set to false
	let URLparameters = {SUN: false, MON: false, TUE: false, WED: false, THU: false, FRI: false, SAT: false, M: false, W: false, H: false, G: false, S: false, KF: false, SI: false, AL: false};
	
	//uses the getUrlVar function to see if any of the URL parameters are set to one and if so updates associated dictionary key value to true 
	if(getUrlVar("sunday")==1){
		URLparameters.SUN = true;
	}
	if(getUrlVar("monday")==1){
		URLparameters.MON = true;
	}
	if(getUrlVar("tuesday")==1){
		URLparameters.TUE = true;
	}
	if(getUrlVar("wednesday")==1){
		URLparameters.WED = true;
	}
	if(getUrlVar("thursday")==1){
		URLparameters.THU = true;
	}
	if(getUrlVar("friday")==1){
		URLparameters.FRI = true;
	}
	if(getUrlVar("saturday")==1){
		URLparameters.SAT = true;
	}
	if(getUrlVar("men")==1){
		URLparameters.M = true;
	}
	if(getUrlVar("woman")==1){
		URLparameters.W = true;
	}
	if(getUrlVar("handi")==1){
		URLparameters.H = true;
	}
	if(getUrlVar("lgbt")==1){
		URLparameters.G = true;
	}
	if(getUrlVar("spanish")==1){
		URLparameters.S = true;
	}
	if(getUrlVar("kid")==1){
		URLparameters.KF = true;
	}
	if(getUrlVar("asl")==1){
		URLparameters.SI = true;
	}
	if(getUrlVar("alanon")==1){
		URLparameters.AL = true;
	}

	return URLparameters;
}

function addSelections(){
	if(smlURLparameters.SUN){
		return "where J = 1";
	}
	if(smlURLparameters.MON){
		return "where K = 1";
	}
	if(smlURLparameters.TUE){
		return "where L = 1";
	}
	if(smlURLparameters.WED){
		return "where M = 1";
	}
	if(smlURLparameters.THU){
		return "where N = 1";
	}
	if(smlURLparameters.FRI){
		return "where O = 1";
	}
	if(smlURLparameters.SAT){
		return "where P = 1";
	}
	if(smlURLparameters.M){
		return "where Q = 1";
	}
	if(smlURLparameters.W){
		return "where R = 1";
	}
	if(smlURLparameters.H){
		return "where S = 1";
	}
	if(smlURLparameters.G){
		return "where T = 1";
	}
	if(smlURLparameters.S){
		return "where U = 1";
	}
	if(smlURLparameters.KF){
		return "where V = 1";
	}
	if(smlURLparameters.SI){
		return "where (W = 1 or X = 1)";
	}
	if(smlURLparameters.AL){
		return "where Y = 1";
	}
}

// helper function to get URL Parameter from https://gist.github.com/varemenos/2531765
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}