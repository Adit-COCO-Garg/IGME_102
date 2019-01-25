/**
 * Adit Garg
 * IGME-102: Assignment Name, 1/21/19
 * Draws a grid of pacman or "hi" with 3% chance of a "hey" showing up once.
 */
"use strict"; //catch some common coding errors

//Global variables
var Pacs = [], heyHit=false; //array of Pac-man objects and defines a "hey" event occured variable

/**
 * setup : Calls canvasCreat function, applys a background, and initializes pac man objects
 */
function setup() {
    canvasCreat(); // Canvas creator function called
    background(0); // Light Gray Background
    objectMaker(); // Defines and initializes pac man objects
}

/**
 * draw : Display the Pac class instance if the recent key press was 2
 */
function draw() {
    if (keyCode === 50) {
        background(0); // Clear the bg!
        objectDisplay(); // Calls The Function that updates and displays all the objects within Pacs class
    }
}

/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
    //Canvas setup
    canvas = createCanvas(600, 400); // defining the canvas as a variable allows it to be versatile
    canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
    canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
    noStroke(); //No stroke
}

/**
 * objectMaker: defines and creates pac objects
 */
function objectMaker() {
    for (let r = 0; r < 4; r++) {
        let innerA = []; //localVariable for a row of cells
        for (let c = 0; c < 6; c++) {
            let x = 50 + c * 100;
            let y = 50 + r * 100;
            innerA.push(new Pac(x, y));
        }
        //force line break between rows of controls
        Pacs.push(innerA); //each row gets pushed one by one
    }
}

/**
 * ObjectDisplay: Displays all objects present in the Pacs array
 */
function objectDisplay() {
    for (let row of Pacs) { //for each row
        for (let cell of row) { // for each cell in that row
            cell.update(); // call that cell's update
            cell.display(); // call that cell's display
        }
    }
}

/**
 * worldGrid: Prints out a "hi" with 97% probablity and hey otherwise,
 * once a "hey" is printed only hi is printed out
 */
function worldGrid() {
    background(0); //clear the bg!
    heyHit=false;
    textSize(20);
    for (let r = 0; r < 13; r++) {
        for (let c = 0; c < 15; c++) {
            let x = 10 + c * 40;
            let y = 20 + r * 30;
            let heyProb = int(random(0, 101));//Based upon probablity determines a value which determines a hey or a hi
            if ((heyProb >= 97) && (heyHit === false)) {
                fill(17, 96, 82);
                text("hey", x, y);
                heyHit = true;
            } else if ((heyProb < 97) && (heyHit === false)) {
                fill(0, 0, 50);
                text("hi", x, y);
            } else {
                fill(0, 0, 50);
                text("hi", x, y);
            }
        }
    }
}

/**
 * keyTyped: When a key type event occurs and the key pressed is 1
 * then call the worldGrid function
 */
function keyTyped() {
    if (keyCode === 49) {
        worldGrid();
    }
    return false;
}
