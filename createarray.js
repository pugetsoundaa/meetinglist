// Create Meeting Array Function and Helper Functions

function createMeetingArray(meetingDT){
	// creates an array of 7 arrays of the indexes of meetings for each day of the week
	let arrayOfRowIndex = new Array(7);
	for(let i = 0; i < 7; i++){
		arrayOfRowIndex[i] = meetingDT.getFilteredRows([{column: i+14, value: 1}]);
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
		let slug = meetingDT.getValue(index,3);
		let open = meetingDT.getValue(index,4);
		let address = meetingDT.getValue(index,5);
		let city = meetingDT.getValue(index,6);
		let zipcode = meetingDT.getValue(index,7);
		let district = meetingDT.getValue(index,8);
		let location = meetingDT.getValue(index,9);
		let webnotes = meetingDT.getValue(index,10);
		let wherewhennotes = meetingDT.getValue(index,11);
		let wherewhenname = meetingDT.getValue(index,12);
		let lupdate = meetingDT.getValue(index,13);
		let sunday = meetingDT.getValue(index,14);
		let monday = meetingDT.getValue(index,15);
		let tuesday = meetingDT.getValue(index,16);
		let wednesday = meetingDT.getValue(index,17);
		let thursday = meetingDT.getValue(index,18);
		let friday = meetingDT.getValue(index,19);
		let satruday = meetingDT.getValue(index,20);
		let mens = meetingDT.getValue(index,21);
		let womens = meetingDT.getValue(index,22);
		let handi = meetingDT.getValue(index,23);
		let lgbtq = meetingDT.getValue(index,24);
		let spanish = meetingDT.getValue(index,25);
		let kid = meetingDT.getValue(index,26);
		let si = meetingDT.getValue(index,27);
		let alanon = meetingDT.getValue(index,28);
		let young = meetingDT.getValue(index,29);
		let speaker = meetingDT.getValue(index,30);
		
		// call the meeting object constructor
		let meeting = new Meeting(name, stime, stime_num, slug, open, address, city, zipcode, district, location, webnotes, wherewhennotes, wherewhenname, lupdate, sunday, monday, tuesday, wednesday, thursday, friday, satruday, mens, womens, handi, lgbtq, spanish, kid, si, alanon, young, speaker);	
		arrayOfMeetingObjects[i] = meeting;
	}
	return arrayOfMeetingObjects;
}


