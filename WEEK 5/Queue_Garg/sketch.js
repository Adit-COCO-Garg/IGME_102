/**
 * Adit Garg
 * IGME-102: Queue 5-1, 2/13/19
 * test and preform a bunch of queue functions and
 * make a queue of images and allow it preform actions
 * based upon user input
 */
"use strict"; //catch some common coding errors

//Global variables
let coverQ;
const covers=["arethaCovers/AmazingGrace.jpg", "arethaCovers/ArethaArrives.jpg", "arethaCovers/ArethaNow.jpg", "arethaCovers/INeverLoved.jpg", "arethaCovers/LadySoul.jpg", "arethaCovers/Sparkle.jpg", "arethaCovers/SpiritInTheDark.jpg", "arethaCovers/ThisGirl.jpg", "arethaCovers/WhosZoomingWho.jpg", "arethaCovers/YoungGiftedAndBlack.jpg"]

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	testQueue();
    coverQ = new ImageQueue();
}

/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
    background("black");
	coverQ.display();
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat(){
	//Canvas setup
    createCanvas(1000, 1000); // defining the canvas

}

/**
 * testQueue : Playing around with queues and using queue functions
 */
function testQueue(){
	let myQueue= new queue([1,2,3,4]);
    myQueue.enqueue(5);
    console.log("Queue: ", myQueue.toString(), ".");
    console.log("Peek: ", myQueue.peek(), ".");
    console.log("Queue contains 4? :", myQueue.contains(4), ".");
    console.log("Queue size: ", myQueue.size, ".");
    for (let i = 0; i < 4; i++) {
		console.log("Queue dequeue: ", myQueue.dequeue(), ".");
	}
    console.log("Queue: ", myQueue.toString(), ".");
    console.log("Queue size: ", myQueue.size, ".");
    myQueue.enqueue(7);
    myQueue.enqueue(8);
    console.log("Peek: ", myQueue.peek(), ".");
    console.log("Queue size: ", myQueue.size, ".");
    myQueue.clear();
    console.log("Queue: ", myQueue.toString(), ".");
    console.log("Queue size: ", myQueue.size, ".");
}

/**
 * addCover: Callback function that enqueues loaded cover images
 * cover image: Takes in loaded images as params
 */
function addCover(coverImage){
    coverQ.enqueue(coverImage);
}

/**
 * keyTyped: On a key press checks for -, 0-9, and c key events
 * and calls upon queue functions accordingly
 */
function keyTyped(){
	if(key=="-"){
		coverQ.dequeue(); //dequeues an image
	}
	if(key=="c"){
		coverQ.clear(); //Clears all the queue objects - annihlation 
	}
	if((key>=0)&&(key<=9)){ //spawn a cover image
		loadImage(covers[key],addCover);
	}
}