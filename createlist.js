// Create Meeting List Function and Helper Functions

function createMeetingList(meetingArray){
	
	let daycount = 0;
	let meetingcount = 0;

	let tableHeader = "<table class=\"pure-table pure-table-bordered footable table sml_table\">\n<thead>\n<tr>\n<th class=\"oc\" data-sort-ignore=\"true\">Day</th><th data-sort-initial=\"true\" data-type=\"numeric\">Time</th><th class=\"oc\" data-hide=\"phone\" data-sort-ignore=\"true\">O/C</th><th>Name</th><th data-hide=\"phone\" data-sort-ignore=\"true\">Address</th><th>City</th><th data-hide=\"all\" data-sort-ignore=\"true\">Notes</th>\n</tr>\n</thead>\n<tbody>\n";
	let tableFooter = "</tbody>\n</table>\n";

	// checks to see if there are any meetings for each day before printing subheading and then rows of meetings
	if(meetingArray[0].length != 0){
		daycount++;
		let appendString = "<h3>Sunday:</h3>\n"+tableHeader;
		for(let value of meetingArray[0]){
			meetingcount++;
			appendString += value.toTableRow("Sun")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[1].length != 0){
		daycount++;
		let appendString = "<h3>Monday:</h3>\n"+tableHeader;
		for(let value of meetingArray[1]){
			meetingcount++;
			appendString += value.toTableRow("Mon")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[2].length != 0){
		daycount++;
		let appendString = "<h3>Tuesday:</h3>\n"+tableHeader;
		for(let value of meetingArray[2]){
			meetingcount++;
			appendString += value.toTableRow("Tue")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[3].length != 0){
		daycount++;
		let appendString = "<h3>Wednesday:</h3>\n"+tableHeader;
		for(let value of meetingArray[3]){
			meetingcount++;
			appendString += value.toTableRow("Wed")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[4].length != 0){
		daycount++;
		let appendString = "<h3>Thursday:</h3>\n"+tableHeader;
		for(let value of meetingArray[4]){
			meetingcount++;
			appendString += value.toTableRow("Thu")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[5].length != 0){
		daycount++;
		let appendString = "<h3>Friday:</h3>\n"+tableHeader;
		for(let value of meetingArray[5]){
			meetingcount++;
			appendString += value.toTableRow("Fri")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	if(meetingArray[6].length != 0){
		daycount++;
		let appendString = "<h3>Saturday:</h3>\n"+tableHeader;
		for(let value of meetingArray[6]){
			meetingcount++;
			appendString += value.toTableRow("Sat")+"\n";
		}
		appendString += tableFooter;
		$("#sml_table").append(appendString);
	}

	// calls a function to change the title description based on the search parameters
	//updateTitleDescription();
}

function updateTitleDescription(){

}