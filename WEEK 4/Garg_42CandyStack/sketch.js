/**
 * Adit Garg
 * IGME-102: CandyStack 4-2, 2/9/19
 * test and preform a bunch of stack functions and
 * make and destroy candies using key events
 */
"use strict"; //catch some common coding errors

//Global variables
var myCandyStack;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	createCanvas(300, 600); // defining the canvas
	testStack();
	myCandyStack = new CandyStack();
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
 * keyTyped: On a key press checks for -, =, and c key events
 * and calls upon candy functionsaccordingly
 */
function keyTyped(){
	if(key=="-"){
		console.log("stack pop: ", myCandyStack.pop(), "."); //pops a candy
	}
	if(key=="c"){
		myCandyStack.clear(); //Clears all the candy objects - annihlation 
	}
	if(key=="="){ //spawn a candy
		let cColor= color(myCandyStack.size*10,125,125);
		myCandyStack.push(new Candy(cColor));
	}
}
/**
 * TestStack : Playing around with stacks and using stack functions
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
	console.log("stack contains hi? :", myStack.contains("hi"), ".");
	console.log("peek: ", myStack.peek(), ".");
	myStack.clear();
	console.log("stack: ", myStack.toString());
	console.log("stack pop: ", myStack.pop(), ".");
	console.log("stack size: ", myStack.size, ".");
}
