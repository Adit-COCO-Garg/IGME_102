/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas,branch1;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
//	strokeCap(SQUARE);
	canvasCreat();
	background(195, 2, 83); //Light Gray Background
	angleMode(DEGREES)
	let root = createVector(width / 2, height);
	branch1 = new branch(root,-90,100);
	branch1.display();
}


/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {

}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	
	canvas = createCanvas(600, 600); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
//	noStroke(); //No stroke
}
