// Create Meeting Array Function and Helper Functions

function createMeetingArray(meetingDT){
	// creates an array of 7 arrays of the indexes of meetings for each day of the week
	let arrayOfRowIndex = new Array(7);
	for(let i = 0; i < 7; i++){
		arrayOfRowIndex[i] = meetingDT.getFilteredRows([{column: i+9, value: 1}]);
	}

	// creates an array of 7 arrays of meeting objects for each day of the week
	let arrayOfMeetingArrays = new Array(7);
	for(let i = 0; i< 7; i++){
		arrayOfMeetingArrays[i] = createDayMeetingObjectArray(meetingDT, arrayOfRowIndex[i]);
	}

	createMeetingList(arrayOfMeetingArrays);
}

function createDayMeetingObjectArray(meetingDT, rowIndexOfDay){
	let numRows = rowIndexOfDay.length;
	let arrayOfMeetingObjects = new Array(numRows);

	for(let i = 0; i < numRows; i++){
		let index = rowIndexOfDay[i];
		let stime = meetingDT.getValue(index,0);
		let stime_num = meetingDT.getValue(index,1);
		let open = meetingDT.getValue(index,2);
		let name = meetingDT.getValue(rowIndexOfDay[i],3);
		let address = meetingDT.getValue(index,4);
		let city = meetingDT.getValue(index,5);
		let zipcode = meetingDT.getValue(index,6);
		let notes = meetingDT.getValue(index,7);
		let lupdate = meetingDT.getValue(index,8);
		let sunday = meetingDT.getValue(index,9);
		let monday = meetingDT.getValue(index,10);
		let tuesday = meetingDT.getValue(index,11);
		let wednesday = meetingDT.getValue(index,12);
		let thursday = meetingDT.getValue(index,13);
		let friday = meetingDT.getValue(index,14);
		let satruday = meetingDT.getValue(index,15);
		let mens = meetingDT.getValue(index,16);
		let womens = meetingDT.getValue(index,17);
		let handi = meetingDT.getValue(index,18);
		let lgbtq = meetingDT.getValue(index,19);
		let spanish = meetingDT.getValue(index,20);
		let kid = meetingDT.getValue(index,21);
		let si = meetingDT.getValue(index,22);
		let vsi = meetingDT.getValue(index,23);
		let alanon = meetingDT.getValue(index,24);
		
		// call the meeting object constructor
		let meeting = new Meeting(stime, stime_num, open, name, address, city, zipcode, notes, lupdate, sunday, monday, tuesday, wednesday, thursday, friday, satruday, mens, womens, handi, lgbtq, spanish, kid, si, vsi, alanon);	
		arrayOfMeetingObjects[i] = meeting;
	}
	return arrayOfMeetingObjects;
}


