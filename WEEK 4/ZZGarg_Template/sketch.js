/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, myCandyStack;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	testStack();
	myCandyStack = new CandyStack;


}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background("white");
	myCandyStack.display();

}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	canvas = createCanvas(300, 600); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}

function keyTyped(){
	if(key=="-"){
		myCandyStack.pop();
	}
	if(key=="c"){
		myCandyStack.clear();
	}
	if(key=="="){
		let cColor= color(myCandyStack.size()*10,125,125);
		myCandyStack.push(new candy(cColor));
	}
}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function testStack() {
	let myStack = new stack([1, 2, 3, 4]);
	myStack.push(5);
	myStack.push(6);
	console.log("stack: ", myStack.toString(), ".");
	console.log("peek: ", myStack.peek(), ".");
	console.log("stack contains 4? :", myStack.contains(4), ".");
	console.log("stack size: ", myStack.size, ".");
	for (let i = 0; i <= 4; i++) {
		console.log("stack pop: ", myStack.pop(), ".");
	}
	console.log("stack: ", myStack.toString(), ".");
	console.log("stack size: ", myStack.size, ".");
	myStack = new stack();
	myStack.push("hi");
	myStack.push("bye");
	console.log("stack: ", myStack.toString(), ".");
	console.log("stack contains 4? :", myStack.contains(4), ".");
	console.log("stack contains 4? :", myStack.contains("hi"), ".");
	console.log("peek: ", myStack.peek(), ".");
	myStack.clear();
	console.log("stack: ", myStack.toString());
	console.log("stack pop: ", myStack.pop(), ".");
	console.log("stack size: ", myStack.size, ".");
}
