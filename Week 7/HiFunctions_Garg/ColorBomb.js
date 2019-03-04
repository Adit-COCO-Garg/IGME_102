/*
* W. Michelle Harris
* ColorBomb will be a Candy-derived class for Candy Crush
* additional property:
*	juiciness – a number
*/
class ColorBomb extends Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  color used to set property
	*/
	constructor(color) {
		super(color);
		this.matchReq = 5;
		this.power = "Removes all candies of the same color.";
		//The ColorBomb property
		this.juiciness = 70;
	}
	
	/**
	* Display extra property info about ColorBomb to console
	*/
	displayMore() {
		console.log("This " + this.color + " candy is a Color Bomb candy."); 
		console.log("Its special power is explosive, and its juiciness is " + this.juiciness);
	}
}