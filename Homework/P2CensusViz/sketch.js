/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas,tractLocs=[],currRange,h,w;

function preload(){
	loadStrings("2017_gaz_tracts_36.txt", readTracts, readFail)
}
/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	
	canvasCreat(); //canvas creator function called
	background(195, 2, 83); //Light Gray Background
	currRange=mapper(tractLocs)
	console.log(tractLocs)
}

function mapper(tractLocs){
	let tx=[],ty=[]
	tractLocs.forEach(t=>{
		tx.push(t.lat);
		ty.push(t.long);
	})
	console.log(tx,ty)
	return [min(tx),max(tx),min(ty),max(ty)]
}
/**
 * readTracts: takes in tracts as a parameter and for each 
 * tract generates fields and whille field is not a number,
 * prints those fields using the utility function print
 * tract which accepts fields as parameter
 */
function readTracts(tracts) {
	console.log(currRange)
	tracts.forEach(fields => {
		if (!isNaN(fields[0])) {
			let currTract=fields.split("	")
			tractLocs.push(new tract_loc(currTract[0],parseFloat(currTract[3]),-1*(parseFloat(currTract[4]))))
		}
	})
}

/**
 * printTracts: takes in fields as a parameter, and reads appropriate data into
 * variables by destructuring them into an array of said variables and then
 * reformating them based on datatypes created before
 */
function printTract(fields) {
	//	let count = new Intl.NumberFormat('en-US');
	//	let percent = new Intl.NumberFormat('en-US', {
	//		style: 'percent'
	//	});
	//	let dollars = new Intl.NumberFormat('en-US', {
	//		style: 'currency',currency:"USD"
	//	});
	console.table(fields);

}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {
	background(195, 2, 83); //Light Gray Background
	tractLocs.forEach(t=>{
		ellipse(map(t.lat,currRange[0],currRange[1],0,w),map(t.long,currRange[2],currRange[3],0,h),10,10);
	})
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	h=innerHeight;
	w=innerWidth;
	canvas = createCanvas(w,h); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(HSB, 360, 100, 100); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}

/**
 * readFail: spits error message when relevant
 */
function readFail() {
	console.log("Read failed! Try again, sorry for the inconvenience");
}
