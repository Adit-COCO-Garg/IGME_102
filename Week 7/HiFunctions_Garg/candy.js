/*
* W. Michelle Harris
* Candy will be base class for Candy Crush
* properties:
*	color – a string
*	matchReq - # of candies matched to receive special candy
*	power - Special power, another string
*/
class Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  color used to set property
	*/
	constructor(color) {
		this.color = color;
		this.matchReq = 0;
		this.power = "Match 3 of these candies in a row to earn points!";
		console.log("Made a " + color + " candy");
	}
	
	/**
	* Display property info about Candy to console
	*/
	display() {
		console.log("The " + this.color + " candy requires " + this.matchReq + " matched candies to spawn."); 
		console.log(this.color + "'s special power: " + this.power);
	}
}