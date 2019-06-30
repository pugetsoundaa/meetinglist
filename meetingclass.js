// Meeting Class

class Meeting{

	// meeting object constructor, fields match database
	constructor(in_mname, in_stime, in_stime_num, in_slug, in_open, in_address, in_city, in_zipcode, in_district, in_location, in_webnotes, in_wherewhennotes, in_wherewhenname, in_lupdate, in_sunday, in_monday, in_tuesday, in_wednesday, in_thursday, in_friday, in_saturday, in_mens, in_womens, in_handi, in_lgbtq, in_spanish, in_kid, in_si, in_alanon, in_young, in_speaker){
		this.mname = in_mname;
		this.stime = in_stime;
		
		this.address = in_address;
		this.city = in_city;
		this.zipcode = in_zipcode;
		this.district = in_district;
		this.location = in_location;
		this.webnotes = in_webnotes;
		this.lupdate = in_lupdate;
		this.open = in_open;
		this.mens = in_mens;
		this.womens = in_womens;
		this.handi = in_handi;
		this.lgbtq = in_lgbtq;
		this.spanish = in_spanish;
		this.kid = in_kid;
		this.si = in_si;
		this.alanon = in_alanon;
		this.young = in_young;
		this.speaker = in_speaker;
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
		
		// makes location and notes and empty string if null
		let newlocation = this.location;
		if (this.location == null) {
			newlocation = "";
		}
		let newnotes = this.webnotes;
		if (this.webnotes == null) {
			newnotes = "";
		}
	
		
		// creates a String of the meeting info as an HTML table row and returns it
		let htmlstring = "<tr><td class=\"oc col_day\">"+day+"</td>"; // day, input as parameter
		htmlstring = htmlstring+"<td class=\"col_time\" data-value=\""+this.stime_num+"\">"+this.stime+"</td>"; // String start time with numeric data-value for sorting
		htmlstring = htmlstring+"<td class=\"oc col_oc\">"+open_char+"</td><td class=\"col_name\">"+newmname+"</td>"; // O or C and New Name
		// used apple maps, as if it's a non apple device it automatically goes to google maps
		htmlstring = htmlstring+"<td class=\"col_address\"><a target=\"_blank\" href=\"http://maps.apple.com/?q="+wholeaddress+"\">"+this.address+" ["+this.zipcode+"]"+"</a></td>";
		htmlstring = htmlstring+"<td class=\"col_city\">"+this.city+"</td>"; // city
		htmlstring = htmlstring+"<td class=\"col_location\">"+newlocation+"</td>"; // location
		htmlstring = htmlstring+"<td class=\"col_notes\">"+newnotes+"</td>"; // notes
		htmlstring = htmlstring+"<td class=\"col_updated\">"+this.lupdate+"</td></tr>"; // updated
		
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
			tempname = tempname+"L";
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
			tempname = tempname+"K";
			changes++;
		}
		if(meeting.si==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"A";
			changes++;
		}
		if(meeting.alanon==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"@";
			changes++;
		}
		if(meeting.young==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"Y";
			changes++;
		}
		if(meeting.speaker==1){
			if(changes > 0){
				tempname = tempname+", ";
			}
			tempname = tempname+"P";
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