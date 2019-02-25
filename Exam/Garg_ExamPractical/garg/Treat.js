/**
* Adit Garg
* IGME-102: Practical Exam, 2/22/19
*/ 

"use strict"; //catch some common coding errors

/*
* Treat class: Parent calss. 
*Params:
* flavor: takes in a treat flavor
* price: takes in a price
* x: random value between width
*/
class Treat {
	constructor(flavor, price) {
		this.flavor = flavor;
		this.price = price;
		this.x = random(0, width);
		console.log("Baked a ", this.flavor, " treat");
	}
	/*
	*getString(): returns a string
	*/
	getString() {
		return ("\n" + this.flavor + " treat for $" + this.price);
	}
}
