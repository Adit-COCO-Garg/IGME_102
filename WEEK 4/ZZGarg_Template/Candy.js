/*
* W. Michelle Harris
* Candy will be base class for Candy Crush
* properties:
*	color – (via p5) a string, gray number, or color object
*	matchReq - # of candies matched to receive special candy
*	power - Special power, another string
*/
class Candy {
	/**
	* constructor : inits properties, logs creation
	* @param  colorName - color used to set property
	*/
	constructor(colorName) {
		this.color = colorName;
		this.matchReq = 0;
		this.power = "Match 3 of these candies in a row to earn points!";
		console.log("* Made a " + colorName + " candy");
	}
	
	/**
	* display :  Draw circle in candy's color at given location, size
	* @param x coord, number
	* @param y coord, number
	* @param size, number - size of circle to draw to represent candy
	*/
	display(x, y, size) {
		fill(this.color);
		ellipse(x, y, size, size);
	}
}