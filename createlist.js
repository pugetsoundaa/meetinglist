// Create Meeting List Function and Helper Functions

function createMeetingList(meetingArray){
	
	let meetingcount = 0;
	
	let tableHeader = "<table class=\"pure-table pure-table-bordered footable table sml_table\">\n<thead>\n<tr>\n<th class=\"oc\" data-sort-ignore=\"true\">Day</th><th data-sort-initial=\"true\" data-type=\"numeric\">Time</th><th class=\"oc\" data-hide=\"tablet, phone\" data-sort-ignore=\"true\">O/C</th><th>Name</th><th data-hide=\"tablet, phone\" data-sort-ignore=\"true\">Address</th><th>City</th><th data-hide=\"all\" data-sort-ignore=\"true\">Notes</th>\n</tr>\n</thead>\n<tbody>\n";
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
	
	// calls a function to change the title description based on the search parameters
	//updateTitleDescription();
	
	// footable initialization
	$(function () {$('.footable').footable({addRowToggle: false}); });
}

function updateTitleDescription(){

}
