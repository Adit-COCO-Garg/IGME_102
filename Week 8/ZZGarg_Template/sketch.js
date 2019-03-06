/**
 * Adit Garg
 * IGME-102: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, word, cloudyBoi, cloudyBois = [];

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	word = new Word("bamboozled", random(200));
	cloudyBoi = new Cloud();
	cloudyBoi.stringinator("It'd");
	cloudyBoi.stringinator("be");
	cloudyBoi.stringinator("like");
	cloudyBoi.stringinator("that");
	loadStrings("text.txt", loadClouds);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background("white"); //Light Gray Background
	word.display(mouseX, mouseY);
	cloudyBoi.display();
	cloudyBois.forEach((c)=>{c.display();})
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(innerWidth, innerHeight); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
	textFont("Arial");
	textSize(20)
	textAlign(CENTER)
}

function loadClouds(fileStrings) {
	fileStrings.forEach((lineStrings) => {
		let aCloud = new Cloud();
		let words = lineStrings.split(" ");
		words = new Set(words);
		let id=0
		words.forEach(word => {
			aCloud.stringinator(word,id);
			id++;
		});
		cloudyBois.push(aCloud)
	});
}
