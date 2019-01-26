/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, candyBoard;

/**
 * setup : Candy object's created and it's children are created and their properties are displayed
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
    candyBoard = new Board();
    candyBoard.display();
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */

function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(800,600); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
	rectMode(CENTER);
    textAlign(CENTER);
}
