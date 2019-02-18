/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, fishies = [],
	fishiesImg = [],
	fishSchool, fish, song;

function preload() {
	for (let i = 0; i < 3; i++) {
		// local variable for inner array
		let innerA = []
		for (let j = 0; j < 4; j++) {
			innerA.push(loadImage("Assets/Fish" + (i + 1) + "/fish" + (j + 1) + ".png"));
		}
		//add finished inner array to fishies
		fishiesImg.push(innerA);
	}
	song = loadSound('Assets/song.mp3');

}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(0, 0, 0); //Light Gray Background
	fishSchool = stockAquarium(15);
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(189, 15, 100);
	for (let i = fishSchool.length - 1; i >= 0; i--) {
		fishSchool[i].display((i * 80) + 20);
		fishSchool[i].move();
	}
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(1000, 800); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}


function getNewFish() {
	let newFish = null;
	let fishDecider = int(random(1, 4));
	if (fishDecider === 1) {
		newFish = new fish1();
	} else if (fishDecider === 2) {
		newFish = new fish2();
	} else if (fishDecider === 3) {
		newFish = new fish3();
	}
	return newFish;
}

function mousePressed() {
	if (song.isPlaying()) { // .isPlaying() returns a boolean
		song.stop();

	} else {
		song.play();

	}
}

function stockAquarium(numFish) {
	fishies = [];
	console.log("***** Stocking the aquariums! *****");
	for (let i = 0; i <= numFish - 1; i++) {
		fishies.push(getNewFish());
	}
	return fishies;
}
