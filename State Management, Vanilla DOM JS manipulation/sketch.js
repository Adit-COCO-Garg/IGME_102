/**
 * Adit Garg
 * IGME-102: RadioUI, 03/29/19
 * Constantly displays squares/ lights controlled by the radio buttons.
 * They can be turned on and off
 */
"use strict"; //catch some common coding errors

/* Global variables */

const allControls = []; //Array of all radio UI instances

/**
* setup : creates a canvas and creates Radio elements
*/
function setup() {
	createCanvas(600,600);
	createElement("br");
	background("black");
	for (let i=0;i<3;i++){
		allControls.push(new RadioUI("Square: "));
	}
}

/**
* draw : Calls display method for each radio item
*/
function draw() {
	allControls.forEach(item=>{item.display()});
}