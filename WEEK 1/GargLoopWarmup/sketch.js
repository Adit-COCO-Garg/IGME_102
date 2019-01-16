/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */

"use strict"; //catch some common coding errors

//Global variables
var canvas, number1, number2;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	for (let i = 0; i <= 7; i++) {
		for (let j = 0; j <= 7; j++) {

			rect(20 + (i * 95), 20 + (j * 95), 90, 90);
		}
	}
	console.log("3,5");
	loopFizzBuzz(3, 5);
	console.log("4,6");
	loopFizzBuzz(4, 6);
	console.log("7,11");
	loopFizzBuzz(7, 11);



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
	canvas = createCanvas(800, 800); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	noStroke(); //No stroke

}

/**
 * loopFizzBuzz : some numbers and checking divisibility
 * checks parameters against an incrementing list of numbers and prints fizz and buzz or both where needed
 */
function loopFizzBuzz(number1, number2) {
	for (let i = 1; i <= 100; i++) {
		console.log("Number " + i + " has:");
		if ((i % number1 === 0) && (i % number2 === 0)) {
			console.log("FizzBuzz");
		} else if (i % number1 === 0) {
			console.log("Fizz");
		} else if (i % number2 === 0) {
			console.log("Buzz");
		} else{
			console.log("nothing (not divisible by either)");
		}
		console.log("For parameter " + number1 + ", " + number2 + ".");
		console.log("");
	}

}
