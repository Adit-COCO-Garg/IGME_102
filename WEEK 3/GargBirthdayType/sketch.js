/**
 * Adit Garg
 * IGME-102: Birthday Type 2, 1/29/19
 * Bouncing excerpts from oscar wilde's play: The importance of being earnest, are constantly chaning color. The background color and text color contrast only when user is over that block. The text stops moving and text is visible.
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, textExcerpt = ["JACK: How can you sit there, calmly eating muffins when we are in this horrible trouble, I can’t make out. You seem to me to be perfectly heartless.", "ALGERNON: Well, I can’t eat muffins in an agitated manner.  The butter would probably get on my cuffs. One should always eat muffins quite calmly. It is the only way to eat them...", "JACK: [Rising] Well, that is no reason why you should eat them all in that greedy way. [Takes muffins from Algernon.]", "ALGERNON: [Offering tea-cake] I wish you would have tea-cake instead. I don’t like tea-cake."], boxes = [], rfont, a = 0;

/**
 * preload : prelaods resources
 */
function preload() {
    rfont = loadFont("assets/NotoSerifSC-Regular.otf");
}

/**
 * setup : calls creatcanvas function draws a background and creates a class.
 */
function setup() {
    canvasCreat(); //canvas creator function called
    background(195, 2, 83); //Light Gray Background
    objectMaker(); //creates text box objects
}

/**
 * draw : Draws text within a bounding box (farce) and calls upon the instances of textbox class
 * Summarize code that you add
 */
function draw() {
    background(195, 2, 83); //Light Gray Background
    objectDisplay();
    //bound box code taken from https://p5js.org/reference/#/p5.Font/textBounds
    let textString = 'FARCE';
    let bbox = rfont.textBounds(textString, 500, 500, 15);
    fill(255);
    stroke(0);
    rect(bbox.x + 23, bbox.y + 6, bbox.w + 15, bbox.h + 15);
    fill(0);
    noStroke();
    textFont(rfont);
    textSize(15);
    text(textString, 500, 500);
    //bound box code taken from https://p5js.org/reference/#/p5.Font/textBounds
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
    rectMode(CENTER)
    textAlign(CENTER)
}
/**
 * objectMaker: creates instances of textboxes
 */
function objectMaker() {
    //Fill 2D array of texBox objects
    for (let r = 0; r < 2; r++) {
        // local variable for inner array
        let innerA = [];
        for (let c = 0; c < 2; c++) {
            let x = (250 + c * 490);
            let y = (250 + r * 490);
            innerA.push(new texBox((250 + c * 490), (250 + r * 490), textExcerpt[a]));
            a++
        }
        //add finished inner array to texBox
        boxes.push(innerA);
    }
    //display objects once they are created
    objectDisplay();
}

/**
 * objectDisplay: creates instances of textboxes
 */
function objectDisplay() {
    //Access each row in texBox
    for (let row of boxes) {
        //Display each texBox in this row
        for (let cell of row) {
            cell.display(mouseX, mouseY);
        }
    }
}
