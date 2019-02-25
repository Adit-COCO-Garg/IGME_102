/**
* Adit Garg
* IGME-102: Practical Exam, 2/22/19
*/ 

"use strict"; //catch some common coding errors

/*
* Dumpling class: Child class of treat. Inherits constructor properties and methods. 
* But the method is overwritten by the child method
*/
class Dumpling extends Treat{
	/*
	*getString(): Overrides the parent method and returns a string
	*/
	getString(){
		return ("\n"+this.flavor + " Dumpling for $"+this.price);
	}
}