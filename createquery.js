// Create Query Function and Helper Functions

function createMeetingQuery(){
	// sets the initial search query to the Google Sheet address
	let googleSheetURL = "https://docs.google.com/spreadsheets/d/1fLxXxKFIiuPJOuTTNzAn1S0rmgjRQhFxqDNZabACIcI/edit?usp=sharing";
	
	// creates a global variable to store a dictionary of the booleans after processing the URL query string
	smlURLparameters = processURLQueryString();

	// creates the search query
	let searchQuery = addSelections();

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
	let URLparameters = {SUN: false, MON: false, TUE: false, WED: false, THU: false, FRI: false, SAT: false, M: false, W: false, H: false, G: false, S: false, KF: false, SI: false, AL: false, O: false, C: false};
	
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
	// had to use woman instead of women as women triggered men as well do to word overlap
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
	if(getUrlVar("open")==1){
		URLparameters.O = true;
	}
	if(getUrlVar("closed")==1){
		URLparameters.C = true;
	}

	return URLparameters;
}

function addSelections(){
	let selections = "";
	let count = 0;
	
	if(getUrlVar("name")!=""){
		if(count > 0){
			selections = selections + " and D contains \'"+getUrlVar("name")+"\'";
		}
		else{
			selections = selections + "where D contains \'"+getUrlVar("name")+"\'";
		}
	}
	if(getUrlVar("city")!=""){
		if(count > 0){
			selections = selections + " and F = \'"+getUrlVar("city")+"\'";
		}
		else{
			selections = selections + "where F = \'"+getUrlVar("city")+"\'";
		}
	}
	if(getUrlVar("zipcode")!=""){
		if(count > 0){
			selections = selections + " and G = "+getUrlVar("zipcode");
		}
		else{
			selections = selections + "where G = "+getUrlVar("zipcode");
		}
	}
	if(smlURLparameters.M){
		if(count > 0){
			selections = selections + " and Q = 1"
		}
		else{
			selections = selections + "where Q = 1";
		}
		count++;
	}
	if(smlURLparameters.W){
		if(count > 0){
			selections = selections + " and R = 1"
		}
		else{
			selections = selections + "where R = 1";
		}
		count++;
	}
	if(smlURLparameters.H){
		if(count > 0){
			selections = selections + " and S = 1"
		}
		else{
			selections = selections + "where S = 1";
		}
		count++;
	}
	if(smlURLparameters.G){
		if(count > 0){
			selections = selections + " and T = 1"
		}
		else{
			selections = selections + "where T = 1";
		}
		count++;
	}
	if(smlURLparameters.S){
		if(count > 0){
			selections = selections + " and U = 1"
		}
		else{
			selections = selections + "where U = 1";
		}
		count++;
	}
	if(smlURLparameters.KF){
		if(count > 0){
			selections = selections + " and V = 1"
		}
		else{
			selections = selections + "where V = 1";
		}
		count++;
	}
	if(smlURLparameters.SI){
		if(count > 0){
			selections = selections + " and (W = 1 or X = 1)"
		}
		else{
			selections = selections + "where (W = 1 or X = 1)";
		}
		count++;
	}
	if(smlURLparameters.AL){
		if(count > 0){
			selections = selections + " and Y = 1"
		}
		else{
			selections = selections + "where Y = 1";
		}
		count++;
	}
	if(smlURLparameters.O){
		if(count > 0){
			selections = selections + " and C = 1"
		}
		else{
			selections = selections + "where C = 1";
		}
		count++;
	}
	if(smlURLparameters.C){
		if(count > 0){
			selections = selections + " and C = 0"
		}
		else{
			selections = selections + "where C = 0";
		}
		count++;
	}
	console.log(selections);
	return selections;
}

// helper function to get URL Parameter from https://gist.github.com/varemenos/2531765
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}