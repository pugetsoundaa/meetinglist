// Meeting Class

class Meeting{

	// meeting object constructor, fields match database
	constructor(in_stime, in_stime_num, in_open, in_mname, in_address, in_city, in_zipcode, in_notes, in_lupdate, in_sunday, in_monday, in_tuesday, in_wednesday, in_thursday, in_friday, in_saturday, in_mens, in_womens, in_handi, in_lgbtq, in_spanish, in_kid, in_si, in_vsi, in_alanon){
		this.stime = in_stime;
		this.stime_num = in_stime_num;
		this.open = in_open;
		this.mname = in_mname;
		this.address = in_address;
		this.city = in_city;
		this.zipcode = in_zipcode;
		this.notes = in_notes;
		this.lupdate = in_lupdate;
		this.sunday = in_sunday;
		this.monday = in_monday;
		this.tuesday = in_tuesday;
		this.wednesday = in_wednesday;
		this.thursday = in_thursday;
		this.friday = in_friday;
		this.saturday = in_saturday;
		this.mens = in_mens;
		this.womens = in_womens;
		this.handi = in_handi;
		this.lgbtq = in_lgbtq;
		this.spanish = in_spanish;
		this.kid = in_kid;
		this.si = in_si;
		this.vsi = in_vsi;
		this.alanon = in_alanon;
	}

	// function to display a meeting object as an HTML table row
	toTableRow(day){
		
		// sets the character to print out for Open or Closed
		let open_char = "C";
		if(this.open == 1){
			open_char = 'O';
		}
		
		// adds the meeting codes to the end of the meeting name
		let newmname = Meeting.addToName(this.mname, this);

		// combines address pieces together to create a whole address
		let wholeaddress = this.address+", "+this.city+" WA "+this.zipcode;
		
		// adds the last update date at the end of the meeting notes
		let newnotes;
		if (this.notes == null) {
			newnotes = "Info Last Updated: "+this.lupdate;
		}
		else {
			newnotes = this.notes+"; Info Last Updated: "+this.lupdate;	
		}
		
		// creates a String of the meeting info as an HTML table row and returns it
		let htmlstring = "<tr><td class=\"oc\">"+day+"</td>"; // day, input as parameter
		htmlstring = htmlstring+"<td data-value=\""+this.stime_num+"\">"+this.stime+"</td>"; // String start time with numeric data-value for sorting
		htmlstring = htmlstring+"<td class=\"oc\">"+open_char+"</td><td>"+newmname+"</td>"; // O or C and New Name
		
		// street name and number but link to apple maps of whole address
		// used apple maps, as if it's a non apple device it automatically goes to google maps
		htmlstring = htmlstring+"<td><a target=\"_blank\" href=\"http://maps.apple.com/?q="+wholeaddress+"\">"+this.address+"</a></td>";
		htmlstring = htmlstring+"<td>"+this.city+"</td>"; // city
		htmlstring = htmlstring+"<td>"+newnotes+"</td></tr>"; // notes
		
		return htmlstring;
	}

	static addToName(mname, meeting){
		let tempname = mname+" (";
		let changes = 0;

		if(meeting.mens==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"M";
			changes++;
		}
		if(meeting.womens==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"W";
			changes++;
		}
		if(meeting.handi==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"H";
			changes++;
		}
		if(meeting.lgbtq==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"G";
			changes++;
		}
		if(meeting.spanish==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"S";
			changes++;
		}
		if(meeting.kid==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"KF";
			changes++;
		}
		if(meeting.si==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"SI";
			changes++;
		}
		if(meeting.vsi==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"VSI";
			changes++;
		}
		if(meeting.alanon==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"@";
			changes++;
		}

		tempname = tempname+")";

		if(changes > 0){
			return tempname;
		}
		else{
			return mname;
		}
		
	}
}