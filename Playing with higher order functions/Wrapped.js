/*
* W. Michelle Harris
* Wrapped will be a Candy-derived class for Candy Crush
* additional property:
*	invisibility – a number
*/
class Wrapped extends Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  color used to set property
	*/
	constructor(color) {
		super(color);
		this.matchReq = 5;
		this.power = "Creates a small explosion when matched with other candies.";
		//The Wrapped property
		this.invisibility = 80;
	}
	
	/**
	* Display extra property info about Wrapped to console
	*/
	displayMore() {
		console.log("This " + this.color + " candy is a Wrapped candy."); 
		console.log("Its special power is devastating, and its invisibility is " + this.invisibility);
	}
}