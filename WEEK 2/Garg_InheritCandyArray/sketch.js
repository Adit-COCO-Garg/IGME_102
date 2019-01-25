/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, candy1, candy2, candy3, candy4, candy5;

/**
 * setup : Candy object's created and it's children are created and their properties are displayed
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	let candySize = 50;
	candy1 = new candy("purple", 0, "Match 3 of these candies in a row to earn points!", 100, 100, candySize);
	candy1.display();

	candy2 = new Regular("red", 0, "No power", 200, 100, candySize);
	candy2.displayMore();

	candy3 = new Wrapped("yellow", 3, "Destroy all candies next to it", 300, 100, candySize);
	candy3.displayMore();

	candy4 = new ColorBomb("pink", 4, "Destroy all candies of that color", 400, 100, candySize);
	candy4.displayMore();

	candy5 = new Striped("green", 4, "Destroy all candies in the vertical or horizontal plane", 500, 100, candySize);
	candy5.displayMore();
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */

function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(800, 600); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
	rectMode(CENTER);
}
