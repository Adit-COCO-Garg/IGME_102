/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, t, xmap, ymap,song,player=0,ts=0,tracker=0;

function preload() {
	song = loadSound('tokyoDrift.mp3');
}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	console.log((millis()-ts)/1000);
	t = ((millis()-ts)/60000)*127*2*PI/2;
	
	xmap = map(cos(t), -1, 1, 40, 960);
	ymap = map(sin(t) * cos(t), -1, 1, 40, 960)
	fill("#ff3399")
	if (){
		
		}
	if (player==1){
		background(195, 2, 83, 0.6);
		
		ellipse(xmap, ymap, 40, 40);
		
	}
	
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
function keyTyped() {
    if ((key === 'p') || (key === 'P')) {//checks if user has typed P or p
        song.play();// plays song
		player=1;
		ts=millis();
		
    } else if ((key === 's') || (key === 'S')) {//checks if user has typed S or s
        song.pause();// pauses song
		player=0;
    }
}