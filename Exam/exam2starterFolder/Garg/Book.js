/**
 * Adit Garg
 * IGME-102: Exam 2, 04/10/19
*/ 

"use strict"; //catch some common coding errors

class Book{
	constructor(ln){
		ln=ln.split("\t");
		[this.title,this.genre,this.writer,this.year]=ln
	}

	getPrettyDetails(){
		let prettyStr= this.title + " by "+this.writer +" ("+this.genre+") "+this.year;
		console.log(prettyStr);
		return prettyStr;
	}

}