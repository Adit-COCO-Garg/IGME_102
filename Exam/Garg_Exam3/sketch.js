/**
 * Adit Garg
 * IGME-102: Adit Garg, 5/3/19
 * "A click places bead lines which follow the
 * mouse, and 4 dots are in the canvas corners."
 * Instruction text is also displayed
 */
"use strict"; //catch some common coding errors

//Global variables
var beads = [];//array to store beadline instances

/**
 * setup : creates a canvas and sets some default values
 */
function setup() {
	console.log("hey")
	//Canvas setup
    createCanvas(500, 500); // defining the canvas as a variable allows it to be versatile
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
	noStroke();//no stroke
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(195, 2, 83); //Light Gray Background
	fill("black");//ensures the text and dots stay black as seen in the pdf
	text("Click in the canvas to place another root.",0,30);
	fourDots();//draws four dots on canvas
	let mouseVec=createVector(mouseX,mouseY);
	beads.forEach(item=>item.display(mouseVec));//passes current mouse location as a vector.
}


/**
 * fourDots : Draws 4 dots on canvas using the p5 set method
 */
function fourDots(){	
	let black= color(0);//color of dots =0 aka black
	set(10, 10, black);
	set(10, width-10, black);
	set(height-10, 10, black);
	set(height-10, width-10, black);
	updatePixels();//updates canvas pixels to shot the new updated canvas
}

/**
 * mouseClicked : creates a beadline instance on mouse click event
 */
function mouseClicked(){
	let mouseVec=createVector(mouseX,mouseY);//current vector location of mouse
	beads.push(new BeadLine(mouseVec));//defines root
}


