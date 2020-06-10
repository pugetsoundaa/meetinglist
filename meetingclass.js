// Meeting Class

class Meeting{

	// meeting object constructor, fields match database
	constructor(in_mname, in_stime, in_address, in_city, in_zipcode, in_location, in_webnotes, in_lupdate, in_open, in_mens, in_womens, in_handi, in_lgbtq, in_spanish, in_kid, in_si, in_alanon, in_young, in_speaker, in_district, in_tc, in_onl, in_nl, in_conference_url, in_conference_phone, in_venmo){
		this.mname = in_mname;
		this.stime = in_stime;
		this.address = in_address;
		this.city = in_city;
		this.zipcode = in_zipcode;
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
		this.distict = in_district;
		this.tc = in_tc;
		this.onl = in_onl;
		this.nl = in_nl;
		this.conference_url = in_conference_url;
		this.conference_phone = in_conference_phone;
		this.venmo = in_venmo;
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

		let address_td = "";
		if(this.tc==1) {
			address_td = "<td class=\"col_address_tc\"><a target=\"_blank\" href=\"http://maps.apple.com/?q="+wholeaddress+"\">"+this.address+" ["+this.zipcode+"]"+"</a></td>";
		}
		else if(this.nl==1) {
			address_td = "<td class=\"col_address_nl\"></td>";
		}
		else{
			address_td = "<td class=\"col_address\"><a target=\"_blank\" href=\"http://maps.apple.com/?q="+wholeaddress+"\">"+this.address+" ["+this.zipcode+"]"+"</a></td>";
		}
		
		// makes location and notes an empty string if null
		let newlocation = this.location;
		if (this.location == null) {
			newlocation = "";
		}
		let newnotes = this.webnotes;
		if (this.webnotes == null) {
			newnotes = "";
		}
		let newurl = this.conference_url;	
		if (this.conference_url == null) {
			newurl = "";
		}
		let newphone = this.conference_phone;
		let newphone_display = "";	
		if (this.conference_phone == null) {
			newphone = "";
		} else {
			newphone_display = newphone.substring(2,5)+"-"+newphone.substring(5,8)+"-"+newphone.substring(8,12);
		}

		// creates a String of the meeting info as an HTML table row and returns it
		let htmlstring = "<tr><td class=\"oc col_day\">"+day+"</td>"; // day, input as parameter
		htmlstring = htmlstring+"<td class=\"col_time\" data-value=\""+Meeting.formatSortableTime(this.stime)+"\">"+Meeting.formatTime(this.stime)+"</td>"; // String start time with numeric data-value for sorting
		htmlstring = htmlstring+"<td class=\"oc col_oc\">"+open_char+"</td><td class=\"col_name\">"+newmname+"</td>"; // O or C and New Name
		// used apple maps, as if it's a non apple device it automatically goes to google maps
		htmlstring = htmlstring+address_td;
		htmlstring = htmlstring+"<td class=\"col_city\">"+this.city+"</td>"; // city
		htmlstring = htmlstring+"<td class=\"col_location\">"+newlocation+"</td>"; // location
		htmlstring = htmlstring+"<td class=\"col_notes\">"+newnotes+"</td>"; // notes
		htmlstring = htmlstring+"<td class=\"col_url\"><a target=\"_blank\" href=\""+newurl+"\">"+newurl+"</a></td>"; // conference_url
		htmlstring = htmlstring+"<td class=\"col_phone\"><a target=\"_blank\" href=\"tel:"+newphone+"\">"+newphone_display+"</a></td>"; // conference_phone
		htmlstring = htmlstring+"<td class=\"col_venmo\">"+this.venmo+"</td>"; // venmo
		htmlstring = htmlstring+"<td class=\"col_updated\">"+Meeting.formatUpdated(this.lupdate)+"</td></tr>"; // updated
		
		return htmlstring;
	}

	static formatUpdated(updated){
		let month = (updated.substring(5,6) == "0" ? updated.substring(6,7) : updated.substring(5,7));
		let day = (updated.substring(8,9) == "0" ? updated.substring(9,10) : updated.substring(8,10));

		return month.concat("/",day,"/",updated.substring(0,4));
	}

	static formatSortableTime(time){
		let [ hours, minutes ] = time.split(':');
		return hours.concat(minutes);
	}

	static formatTime(time){
		let [ hours, minutes ] = time.split(':');
		let ampm = 'AM';
		hours = parseInt(hours);
		if (hours == 0) {
			hours = 12;
			if (minutes == '00') return 'Mid';
		} else if (hours > 11) {
			if (hours == 12 && minutes == '00') return 'Noon'; 
			if (hours == 23 && minutes == '59' || hours == 24 && minutes == '00') return 'Mid';
			ampm = 'PM';
			if (hours > 12) hours -= 12;
		}
		return hours + ':' + minutes + ' ' + ampm;
	}

	static addToName(mname, meeting){
		let mname_mod = mname;
		if(meeting.nl==1){
			mname_mod = mname_mod + " [Online Meeting Only]";
		}
		else if(meeting.tc==1 && meeting.onl==1){
			mname_mod = mname_mod + " [Online Meeting / Temporarily Closed at Location]";
		}
		else if(meeting.tc==1){
			mname_mod = mname_mod + " [Temporarily Closed at Location]";
		}
		else if(meeting.onl==1){
			mname_mod = mname_mod + " [Face to Face at Location & Online Meeting]";
		}
		else {
			mname_mod = mname_mod + " [Face to Face at Location]";
		}

		let tempname = mname_mod+" (";
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
			return mname_mod;
		}
		
	}
}