/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas;

function preload(){
	
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
	

}





/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat(){
	//Canvas setup
    canvas = createCanvas(1000, 1000); // defining the canvas as a variable allows it to be versatile
    canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
    canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
	noStroke(); //No stroke
}

function objectMaker() {
    //Fill 2D array of texBox objects
    for (let r = 0; r < 2; r++) {
        // local variable for inner array
        let innerA = [];
        for (let c = 0; c < 2; c++) {
            let x = 57 + c * 97;
            let y = 56 + r * 95;
            innerA.push(new texBox(x, y, "NAME", random(0, 360)));
        }
        //force line break between rows of controls
        createElement("br"); //line break tag
        //add finished inner array to texBox
        texBox.push(innerA);
    }
    objectDisplay();
}

function objectDisplay() {
    //Access each row in texBox
    for (let row of texBox) {
        //Display each texBox in this row
        for (let cell of row) {
            cell.display();
        }
    }
}