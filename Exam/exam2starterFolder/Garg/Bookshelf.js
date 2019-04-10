/**
 * Adit Garg
 * IGME-102: Exam 2, 04/10/19
*/ 

"use strict"; //catch some common coding errors

class Bookshelf{
	constructor(){
		this.rawBooks=loadStrings("booklist.txt");
		this.catalog=[];
		console.log("Bookshelf Constructor")
	}
	
	loadCatalog(){
		this.rawBooks=this.rawBooks.sort();
		this.rawBooks.forEach(line=>{
			this.catalog.push(new Book(line))
		})
		console.log(this.catalog.length);
	}
	display(){
		this.catalog.forEach(bk=>{
			text(bk.getPrettyDetails(),10,20);
			translate(0,20);
		})
	}

}