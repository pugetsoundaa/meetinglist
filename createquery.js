// Create Query Function and Helper Functions

function createMeetingQuery(){
	let searchQuery = "https://docs.google.com/spreadsheets/d/1fLxXxKFIiuPJOuTTNzAn1S0rmgjRQhFxqDNZabACIcI/edit?usp=sharing";
	let searchQueryObject = new google.visualization.Query(searchQuery);
	searchQueryObject.send(processQuery);
}

function processQuery(queryResponse){
	createMeetingArray(queryResponse.getDataTable());
}