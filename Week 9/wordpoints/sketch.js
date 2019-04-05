/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors
//2017_gaz_tracts_36
//Global variables
var canvas;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	loadStrings("2017_gaz_tracts_36.txt", initTracts(freshTracts))
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
	canvas = createCanvas(1000, 1000); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}

function initTracts(freshTracts) {
	freshTracts.forEach((line) => {
		const fields = line.split("\t");
		if (isNaN(Number.parseInt(fields[0])) == false) {
			const newTract = new tract(fields);
			tracts.push(newTract);

		}

	})
}
