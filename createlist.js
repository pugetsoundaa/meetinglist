// Create Meeting List Function and Helper Functions

function createMeetingList(meetingArray){
	
	let meetingcount = 0;
	
	let tableHeader = "<table class=\"pure-table pure-table-bordered footable table sml_table\">\n<thead>\n<tr>\n<th id=\"th_day\" class=\"oc col_day\" data-sort-ignore=\"true\">Day</th><th id=\"th_time\" class=\"col_time\" data-sort-initial=\"true\" data-type=\"numeric\">Time</th><th id=\"th_oc\" class=\"oc col_oc\" data-hide=\"tablet, phone\" data-sort-ignore=\"true\">O/C</th><th id=\"th_name\" class=\"col_name\" >Name</th><th id=\"th_address\" class=\"col_address\"  data-hide=\"tablet, phone\" data-sort-ignore=\"true\">Address</th><th id=\"th_city\" class=\"col_city\" >City</th><th id=\"th_notes\" class=\"col_notes\" data-hide=\"all\" data-sort-ignore=\"true\">Notes</th>\n</tr>\n</thead>\n<tbody>\n";
	let tableFooter = "</tbody>\n</table>\n";

	let daysLabelsArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	// checks to see if there are any meetings for each day before printing subheading and then rows of meetings
	for(let i = 0; i < 7; i++){
		if(meetingArray[i].length != 0){
			let appendString = "<h3>"+daysLabelsArray[i]+":</h3>\n"+tableHeader;
			for(let value of meetingArray[i]){
				meetingcount++;
				appendString += value.toTableRow(daysLabelsArray[i].substr(0,3))+"\n";
			}
			appendString += tableFooter;
			$("#sml_table").append(appendString);
		}
	}

	// message in case there are no meetings matching the search parameters
	if (meetingcount == 0) {
		$("#sml_table").append("<p id=\"nomeetingmsg\"><em>No meetings found matching your search parameters. <a href=\"search.html\">Try a different search.</a></em></p>");	
	}

	// appends the number of meetings found next to the title description
	$('#mtgnum').append("["+meetingcount+" Found]");
	
	// calls a function to change the title description based on the search parameters
	updateTitleDescription();
	
	// footable initialization
	$(function () {$('.footable').footable({addRowToggle: false}); });
}

function updateTitleDescription(){
	let searchterms = 0;
	let titlestring = "";
	let subtitlestring = "";

	if(smlURLparameters.SUN){
		titlestring = "Sunday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Sunday";
		}
		else {
			subtitlestring = subtitlestring+"Sunday";
		}
		searchterms++;
	}
	if(smlURLparameters.MON){
		titlestring = "Monday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Monday";
		}
		else {
			subtitlestring = subtitlestring+"Monday";
		}
		searchterms++;
	}
	if(smlURLparameters.TUE){
		titlestring = "Tuesday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Tuesday";
		}
		else {
			subtitlestring = subtitlestring+"Tuesday";
		}
		searchterms++;
	}
	if(smlURLparameters.WED){
		titlestring = "Wednesday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Wednesday";
		}
		else {
			subtitlestring = subtitlestring+"Wednesday";
		}
		searchterms++;
	}
	if(smlURLparameters.THU){
		titlestring = "Thursday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Thursday";
		}
		else {
			subtitlestring = subtitlestring+"Thursday";
		}
		searchterms++;
	}
	if(smlURLparameters.FRI){
		titlestring = "Friday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Friday";
		}
		else {
			subtitlestring = subtitlestring+"Friday";
		}
		searchterms++;
	}
	if(smlURLparameters.SAT){
		titlestring = "Saturday Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Saturday";
		}
		else {
			subtitlestring = subtitlestring+"Saturday";
		}
		searchterms++;
	}
	if(getUrlVar("name")!=""){
		titlestring = "Name Contains \""+decodeQS(getUrlVar("name"))+"\" Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Name Contains \""+decodeQS(getUrlVar("name"))+"\"";
		}
		else {
			subtitlestring = subtitlestring+"Name Contains \""+decodeQS(getUrlVar("name"))+"\"";
		}
		searchterms++;
	}
	if(getUrlVar("city")!=""){
		titlestring = "City of "+decodeQS(getUrlVar("city"))+" Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", City of "+decodeQS(getUrlVar("city"));
		}
		else {
			subtitlestring = subtitlestring+"City of "+decodeQS(getUrlVar("city"));
		}
		searchterms++;
	}
	if(getUrlVar("zipcode")!=""){
		titlestring = "Zipcode of "+getUrlVar("zipcode")+" Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Zipcode of "+getUrlVar("zipcode");
		}
		else {
			subtitlestring = subtitlestring+"Zipcode of "+getUrlVar("zipcode");
		}
		searchterms++;
	}
	if(smlURLparameters.O){
		titlestring = "Open Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Open";
		}
		else {
			subtitlestring = subtitlestring+"Open";
		}
		searchterms++;
	}
	if(smlURLparameters.C){
		titlestring = "Closed Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Closed";
		}
		else {
			subtitlestring = subtitlestring+"Closed";
		}
		searchterms++;
	}
	if(smlURLparameters.M){
		titlestring = "Men\'s Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Men Only";
		}
		else {
			subtitlestring = subtitlestring+"Men Only";
		}
		searchterms++;
	}
	if(smlURLparameters.W){
		titlestring = "Women\'s Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Women Only";
		}
		else {
			subtitlestring = subtitlestring+"Women Only";
		}
		searchterms++;
	}
	if(smlURLparameters.H){
		titlestring = "Handicap Accesible Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Handicap Accesible";
		}
		else {
			subtitlestring = subtitlestring+"Handicap Accesible";
		}
		searchterms++;
	}
	if(smlURLparameters.G){
		titlestring = "LGBTQI Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", LGBTQI";
		}
		else {
			subtitlestring = subtitlestring+"LGBTQI";
		}
		searchterms++;
	}
	if(smlURLparameters.S){
		titlestring = "Spanish Speaking Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Spanish Speaking";
		}
		else {
			subtitlestring = subtitlestring+"Spanish Speaking";
		}
		searchterms++;
	}
	if(smlURLparameters.KF){
		titlestring = "Kid Friendly Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Kid Friendly";
		}
		else {
			subtitlestring = subtitlestring+"Kid Friendly";
		}
		searchterms++;
	}
	if(smlURLparameters.SI){
		titlestring = "Sign Language Interpreter Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Sign Language Interpreter";
		}
		else {
			subtitlestring = subtitlestring+"Sign Language Interpreter";
		}
		searchterms++;
	}
	if(smlURLparameters.AL){
		titlestring = "Alanon Concurrent Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Alanon Concurrent";
		}
		else {
			subtitlestring = subtitlestring+"Alanon Concurrent";
		}
		searchterms++;
	}
	if(smlURLparameters.YP){
		titlestring = "Young People Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Young People";
		}
		else {
			subtitlestring = subtitlestring+"Young People";
		}
		searchterms++;
	}
	if(smlURLparameters.SM){
		titlestring = "Speaker Meetings";
		if(searchterms > 0){
			subtitlestring = subtitlestring+", Speaker Meeting";
		}
		else {
			subtitlestring = subtitlestring+"Speaker Meeting";
		}
		searchterms++;
	}

	// if there is only one search term then just change the title
	if (searchterms == 1){
		$('#titdes').replaceWith("<span id=\"titdes\">"+titlestring+"</span>");
	}
	// if there is more than one search term then change title to custom and insert subtitle
	else if (searchterms > 1){
		$('#titdes').replaceWith("<span id=\"+titdes\">Custom Search Meetings</span>");
		$('#subtitdes').append("<b>Parameters:</b>&nbsp;&nbsp;&nbsp;&nbsp;"+subtitlestring);
	}
}
