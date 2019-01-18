/**
 * Adit Garg
 * IGME-101: ICE1-1, 1/14/19
 * a ball bounces around the canvas
 */

"use strict"; //catch some common coding errors

//global variables
var hue, xPos, yPos,xSpeed=3,ySpeed=2;

/**
 * setup : Initialization runs once; called automatically
 * Setup creates a canvas and defines initial value of the X,Y cordinates of the ellipse to be the center of canvas
 */

function setup() {
	canvasCreat(); //canvas creator function called
	xPos = width / 2; //x coordinate is at the center of the screen
	yPos = height * 0.5; //y coordinate is at the center of the screen

}

/**
 * draw : Periodically called automatically
 * draws a ball and makes it bounce around
 */
function draw() {
	background(195, 2, 83); //Light gray background
	if ((xPos <= 25) || (xPos >= 575)) {//checks if ball is within bounds and if not then turns it around
		xSpeed = -xSpeed;
	}
	if ((yPos <= 25) || (yPos >= 575)) {//checks if ball is within bounds and if not then turns it around
		ySpeed = -ySpeed;
	}
	xPos += xSpeed;//moves ball in x plane
	yPos += ySpeed;//moves ball in y plane
	fill(332, 100, 95);//hot-pink
	ellipse(xPos, yPos, 50, 50);//ball

}

/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	createCanvas(600, 600); //canvas 600x600
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	background(195, 2, 83); //Light gray background
	noStroke(); //No stroke
}
