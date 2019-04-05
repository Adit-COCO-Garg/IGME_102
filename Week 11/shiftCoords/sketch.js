/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background("orange"); //Light Gray Background
}
https://api.census.gov/data/2017/acs/acs5?get=B01003,NAME&for=tract:*&in=state:36&in=county:055

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	strokeWeight(1);
	fill(255, 100);
	translate(100, 0);
	rect(0, 0, 100, 100);
	translate(-50, 50);
	rect(0, 0, 100, 100);
	translate(0, 100);
	line(0, 0, -50, 50);
	resetMatrix()
	angleMode(DEGREES);
	strokeWeight(10);
	strokeCap(SQUARE); //vars for circle center point
	let x = width / 2;
	let y = height / 2; //Iterate 360 degrees of lines, +10deg per turn
	for (let i = 0; i < 360; i = i + 10) {
		stroke(i, 150, 200); //hue based on i//radius is 100, angle is i degrees
		line(x, y, x + 100 * cos(i), y + 100 * sin(i));
	}
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(200, 200); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------

}
