/*
* W. Michelle Harris
* Striped will be a Candy-derived class for Candy Crush
* additional property:
*	balance – a boolean
*/
class Striped extends Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  color used to set property
	*/
	constructor(color) {
		super(color);
		this.matchReq = 4;
		this.power = "Removes all candies in the same row or column.";
		//The Striped property
		this.balance = true;
	}
	
	/**
	* Display extra property info about Striped to console
	*/
	displayMore() {
		console.log("This " + this.color + " candy is a Striped candy."); 
		console.log("Its special power is rookish, and its balance is " + this.balance);
	}
}