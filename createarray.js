// Create Meeting Array Function and Helper Functions

function createMeetingArray(meetingDT){
	// creates an array of 7 arrays of the indexes of meetings for each day of the week
	let arrayOfRowIndex = new Array(7);
	for(let i = 0; i < 7; i++){
		arrayOfRowIndex[i] = meetingDT.getFilteredRows([{column: i+10, value: 1}]);
	}

	// creates an array of 7 arrays of meeting objects for each day of the week
	let arrayOfMeetingArrays = new Array(7);
	for(let i = 0; i< 7; i++){
		arrayOfMeetingArrays[i] = createDayMeetingObjectArray(meetingDT, arrayOfRowIndex[i]);
	}

	// if any day(s) of the week are specified in the query, sets non selected days to empty arrays
	if(smlURLparameters.SUN || smlURLparameters.MON || smlURLparameters.TUE || smlURLparameters.WED || smlURLparameters.THU || smlURLparameters.FRI || smlURLparameters.SAT){
		if(!smlURLparameters.SUN){
			arrayOfMeetingArrays[0] = [];
		}
		if(!smlURLparameters.MON){
			arrayOfMeetingArrays[1] = [];
		}
		if(!smlURLparameters.TUE){
			arrayOfMeetingArrays[2] = [];
		}
		if(!smlURLparameters.WED){
			arrayOfMeetingArrays[3] = [];
		}
		if(!smlURLparameters.THU){
			arrayOfMeetingArrays[4] = [];
		}
		if(!smlURLparameters.FRI){
			arrayOfMeetingArrays[5] = [];
		}
		if(!smlURLparameters.SAT){
			arrayOfMeetingArrays[6] = [];
		}
	}

	createMeetingList(arrayOfMeetingArrays);
}

function createDayMeetingObjectArray(meetingDT, rowIndexOfDay){
	let numRows = rowIndexOfDay.length;
	let arrayOfMeetingObjects = new Array(numRows);

	for(let i = 0; i < numRows; i++){
		let index = rowIndexOfDay[i];
		let name = meetingDT.getValue(index,0);
		let stime = meetingDT.getValue(index,1);
		let stime_num = meetingDT.getValue(index,2);
		let open = meetingDT.getValue(index,3);
		let address = meetingDT.getValue(index,4);
		let city = meetingDT.getValue(index,5);
		let zipcode = meetingDT.getValue(index,6);
		let webnotes = meetingDT.getValue(index,7);
		let wherewhennotes = meetingDT.getValue(index,8);
		let lupdate = meetingDT.getValue(index,9);
		let sunday = meetingDT.getValue(index,10);
		let monday = meetingDT.getValue(index,11);
		let tuesday = meetingDT.getValue(index,12);
		let wednesday = meetingDT.getValue(index,13);
		let thursday = meetingDT.getValue(index,14);
		let friday = meetingDT.getValue(index,15);
		let satruday = meetingDT.getValue(index,16);
		let mens = meetingDT.getValue(index,17);
		let womens = meetingDT.getValue(index,18);
		let handi = meetingDT.getValue(index,19);
		let lgbtq = meetingDT.getValue(index,20);
		let spanish = meetingDT.getValue(index,21);
		let kid = meetingDT.getValue(index,22);
		let si = meetingDT.getValue(index,23);
		let vsi = meetingDT.getValue(index,24);
		let alanon = meetingDT.getValue(index,25);
		let young = meetingDT.getValue(index,26);
		let speaker = meetingDT.getValue(index,27);
		
		// call the meeting object constructor
		let meeting = new Meeting(name, stime, stime_num, open, address, city, zipcode, webnotes, wherewhennotes, lupdate, sunday, monday, tuesday, wednesday, thursday, friday, satruday, mens, womens, handi, lgbtq, spanish, kid, si, vsi, alanon, young, speaker);	
		arrayOfMeetingObjects[i] = meeting;
	}
	return arrayOfMeetingObjects;
}


