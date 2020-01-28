/**
 * Adit Garg
 * IGME-102: ArrayDrills, 1/30/19
 * Experiments and drills with arrays
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas;

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	arrayExperiment()
	prosPrint()
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

/**
 * arrayExperiment : Run a bunch array methods and experiment with them
 */
function arrayExperiment() {
	let originalArray = [];
	let reversedArray;
	let portionOirgArray = [];
	let sumArray =[];
	for (let i = 0; i <= 9; i++) {
		originalArray[i] = random(20, 50)
	}
	console.log("The original array of random numbers:" + originalArray);
	reversedArray = originalArray.slice().reverse();
	console.log("Original array after reversal:" + reversedArray);
	portionOirgArray = originalArray.slice(3, 7);
	console.log("Portion of the original array from items at indices 3 to 7:" + portionOirgArray);
	let copiedArray = originalArray.slice();
	for (let i=0;i<=9;i++){
		copiedArray[i]+=random(2,5);
	}
	for (let i=0;i<=9;i++){
		sumArray[i]=copiedArray[i]+originalArray[i];
	} 
	console.log("Sum of the original array and the copied array:"+sumArray);
}

/**
 * prosPrint: make an object literal with influential peoples' names and their job titles and  * print them out using different for loops
 */
function prosPrint(){
	let pros ={"Joichi Ito":"Director, MIT Media Lab","Satya Nadella":"CEO at Microsoft","Bill Gates":"Co-chair, Bill & Melinda Gates Foundation","Joseph Slomka":"Color Scientist at FotoKem Industries","Joshua Harr":"Senior Producer at Epic Games"};
	for (let i=0; i < Object.keys(pros).length; i++) {
		print(Object.entries(pros)[i]); // Print 1 entry array
	}
	for (let a of Object.entries(pros)){
		print(a);
	}for (let b in pros){
		print(b,"-", pros[b]);
	}

}