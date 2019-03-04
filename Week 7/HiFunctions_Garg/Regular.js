/*
* W. Michelle Harris
* Regular will be a Candy-derived class for Candy Crush
* additional property:
*	spiciness – a number
*/
class Regular extends Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  color used to set property
	*/
	constructor(color) {
		super(color);
		this.matchReq = 4;
		this.power = "none.";
		//The REGULAR property
		this.spiciness = 2;
	}
	
	/**
	* Display extra property info about Regular to console
	*/
	displayMore() {
		console.log("This " + this.color + " candy is a regular candy."); 
		console.log("It doesn't have a special power, but its spiciness is " + this.spiciness);
	}
}