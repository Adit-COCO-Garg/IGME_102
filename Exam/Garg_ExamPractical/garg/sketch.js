/**
* Adit Garg
* IGME-102: Practical Exam, 2/22/19
* Adds treats to shopping list and displays it on the screen. user may interact with the list
*/ 

"use strict"; //catch some common coding errors
//global variables
var cart;
/**
* setup :creates a canvas 400x600 and makes shopping cart object
*/
function setup() {
	createCanvas(400,600);
	cart= new ShoppingCart();
}

/**
* draw :draws a white background and calls cart's display method
*/
function draw() {
	background("white")
	cart.display()
}

/**
* keyTyped :looks for key typed event and calls upon appropriate nethods and creates candies
*/
function keyTyped(){
	if (key==="p"){
		cart.print();
	} else if (key==="s"){
		let treat = new Treat("sesame",5.5);
		cart.add(treat);
	} else if (key==="c"){
		let treat = new Treat("choclate",6.25)
		cart.add(treat);
	} else if (key==="d"){
		let treat = new Dumpling("apple",4)
		cart.add(treat);
	} else if (key==="e"){
		cart.empty();
	}
}