/**
 * Adit Garg
 * IGME-102: Project 2, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, tractLocs = [],
	tractData = [],
	currRange, currDRange, h, w, tloc, tdat, f, g, colorScale = chroma.scale(['yellow', 'navy']).mode('hsl'),
	uiControlPop = {},
	uiControlSex = {};

function preload() {
	loadStrings("2017_gaz_tracts_36.txt", readTracts, readFail)
}
/**
 * readTracts: takes in tracts as a parameter and for each 
 * tract generates fields and whille field is not a number,
 * prints those fields using the utility function print
 * tract which accepts fields as parameter
 */
function readTracts(tracts) {
	tracts.forEach((fields) => {
		if (!isNaN(fields[0])) {
			let currTract = fields.split("\t");
			tractData.push(new Tract(parseInt(currTract[0]), parseFloat(currTract[1]), -1 * (parseFloat(currTract[2]))))
		}
	})
	loadJSON("JSONdata.JSON", parseJSON, readFail);


}

function parseJSON(ln) {
	console.log(ln)

	ln.forEach(line => {
		console.log(line[0])
		if (!isNaN(line[0])) {
			let r = tractData.find(tract => tract.id == line[line.length - 1])
			console.log(r)
			if (r != undefined) {
				if ((r.id != 980000) || (r.id != 990000)) {
					r.population = line[0];
					r.mPop = line[1];
					r.fPop = line[2];
					r.medIncome = line[3];
					r.povertyM = line[4];
					r.povertyF = line[5];
					r.white = line[6];
					r.asian = line[7];
					r.black = line[8];
				}

			}

		}
	})
	console.log(tractData)
}
//    ln.forEach(l=>tractData.find(finder))


function finder(t) {
	console.log(t)
	if (t.id == l[line.length - 1]) {
		console.log("yolo")
		t.population = line[0];
		t.mPop = line[1];
		t.fPop = line[2];
		t.medIncome = line[3];
		t.povertyM = line[4];
		t.povertyF = line[5];
	}
}



/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
	currRange = mapper(tractData);
	currDRange = Smapper(tractData);
	canvasCreat(); //canvas creator function called
	setupUiControl();
	background(195, 2, 83); //Light Gray Background
	chroma.scale(['yellow', 'navy']).mode('hsl');
	dataMapper(4);
	background(207, 211, 212); //Light Gray Background
	tractData.forEach(t => t.display())

}

function setupUiControl() {
	//pop raace
	uiControlPop.cb1 = createCheckbox("Race: White", true);
	uiControlPop.cb1.style("z-index", "100")
	console.log("hi", w)
	uiControlPop.cb1.position(w * 0.89, h * 0.01)
	uiControlPop.cb2 = createCheckbox("Race: Asian", true);
	uiControlPop.cb2.style("z-index", "100")
	uiControlPop.cb2.position(w * 0.89, h * 0.03)
	uiControlPop.cb3 = createCheckbox("Race: Black ", true);
	uiControlPop.cb3.style("z-index", "100")
	uiControlPop.cb3.position(w * 0.89, h * 0.05)
	uiControlPop.cb4 = createCheckbox("Race: All", true);
	uiControlPop.cb4.style("z-index", "100")
	uiControlPop.cb4.position(w * 0.89, h * 0.07)
	uiControlPop.cb1.changed(dataMapper1)
	uiControlPop.cb2.changed(dataMapper2)
	uiControlPop.cb3.changed(dataMapper3)
	uiControlPop.cb4.changed(dataMapper4)



	//male fem
	uiControlSex.cb1 = createCheckbox("Sex: Male", true);
	uiControlSex.cb1.style("z-index", "100")
	uiControlSex.cb1.position(w * 0.89, h * 0.15)
	uiControlSex.cb2 = createCheckbox("Sex: Female", true);
	uiControlSex.cb2.style("z-index", "100")
	uiControlSex.cb2.position(w * 0.89, h * 0.17)
	uiControlSex.cb3 = createCheckbox("Sex: All", true);
	uiControlSex.cb3.style("z-index", "100")
	uiControlSex.cb3.position(w * 0.89, h * 0.19)
	uiControlSex.cb1.changed(dataMapper5)
	uiControlSex.cb2.changed(dataMapper6)
	uiControlSex.cb3.changed(dataMapper7)
}

function dataMapper1() {
	console.log("oof");
	dataMapper(1);
	tractData.forEach(t => t.display())
}

function dataMapper2() {
	console.log("oof");
	dataMapper(2);
	tractData.forEach(t => t.display())
}

function dataMapper3() {
	console.log("oof");
	dataMapper(3);
	tractData.forEach(t => t.display())
}

function dataMapper4() {
	console.log("oof");
	dataMapper(4);
	tractData.forEach(t => t.display())
}

function dataMapper5() {
	console.log("oof5");
	dataMapperSex(1);
	tractData.forEach(t => t.display())
}

function dataMapper6() {
	console.log("oof6");
	dataMapperSex(2);
	tractData.forEach(t => t.display())
}

function dataMapper7() {
	console.log("oof7");
	dataMapperSex(3);
	tractData.forEach(t => t.display())
}



function dataMapperSex(n) {
	let tot = 0;
	let counter = 0;
	if (n == 3) {
		if (uiControlSex.cb3.checked()) {
			uiControlSex.cb1.checked(true);
			uiControlSex.cb2.checked(true);
			//
			//			tot = parseInt(t.black) + parseInt(t.asian) + parseInt(t.white);
		} else {
			uiControlSex.cb1.checked(false);
			uiControlSex.cb2.checked(false);
			counter = 0;
			tot = 0;
		}
	} else {
		if (uiControlSex.cb1.checked()) {
			counter++;
		} else {
			uiControlSex.cb3.checked(false);
		}
		if (uiControlSex.cb2.checked()) {
			counter++;
		} else {
			uiControlSex.cb3.checked(false);
		}
		if (counter >= 2) {
			uiControlSex.cb3.checked(true);
			//			tot = parseInt(t.black) + parseInt(t.asian) + parseInt(t.white);

		}

	}
}





function mapper(tractD) {
	let tx = [],
		ty = []
	tractD.forEach(t => {
		tx.push(t.lat);
		ty.push(t.long);
	})
	return [min(tx), max(tx), min(ty), max(ty)]
}

function Smapper(tract) {
	let t1 = [],
		t2 = [],
		t3 = [],
		t4 = [],
		t5 = [],
		t6 = [],
		t7 = [],
		t8 = [],
		t9 = [];
	tract.forEach(t => {
		if (t.medIncome > 0) {
			t1.push(t.population);
			t2.push(t.mPop);
			t3.push(t.fPop);
			t4.push(t.medIncome);
			t5.push(t.povertyM);
			t6.push(t.povertyF);
			t7.push(t.white)
			t8.push(t.asian)
			t9.push(t.black)
		}
	})
	return [min(t1), max(t1), min(t2), max(t2), min(t3), max(t3), min(t4), max(t4), min(t5), max(t5), min(t6), max(t6), min(t7), max(t7), min(t8), max(t8), min(t9), max(t9)]
}

/**
 * printTracts: takes in fields as a parameter, and reads appropriate data into
 * variables by destructuring them into an array of said variables and then
 * reformating them based on datatypes created before
 */
function printTract(fields) {
	console.table(fields);

}
/**
 * draw : Periodically called automatically
 * Summarize code that you add
 */
function draw() {

}


/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
	//Canvas setup
	h = innerHeight;
	w = innerWidth;
	canvas = createCanvas(w, h); // defining the canvas as a variable allows it to be versatile
	canvas.position(0, 0); //due to the variable's versatility the DOM library allows to define position
	canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
	colorMode(RGB, 255, 255, 255); //color mode set to HSB
	//--------
	noStroke(); //No stroke
}

function windowResized() {
	h = innerHeight
	w = innerWidth
	canvas = resizeCanvas(innerWidth, innerHeight);
	dataMapper();
	background(207, 211, 212); //Light Gray Background
	uiControlPop.cb1.position(w * 0.89, h * 0.01)
	uiControlPop.cb2.position(w * 0.89, h * 0.03)
	uiControlPop.cb3.position(w * 0.89, h * 0.05)
	uiControlPop.cb4.position(w * 0.89, h * 0.07)
	uiControlSex.cb1.position(w * 0.89, h * 0.15)
	uiControlSex.cb2.position(w * 0.89, h * 0.17)
	uiControlSex.cb3.position(w * 0.89, h * 0.19)
	tractData.forEach(t => t.display())
}

function dataMapper(n) {
	tractData.forEach(t => {
		t.xPos = map(t.lat, currRange[0], currRange[1], w / 20, w - (w / 20));
		t.yPos = map(t.long, currRange[2], currRange[3], h / 20, h - (h / 20));
		t.popMapped = map(t.population, currDRange[0], currDRange[1], w / 200, w / 180); //color
		t.mPopMapped = (t.mPop) / t.population; //arcs
		t.fPopMapped = (t.fPop) / t.population; //arcs
		t.medIncomeMapped = map(t.medIncome, currDRange[6], currDRange[7], 0, 1); //hover?
		t.povertyMMapped = map(t.povertyM, currDRange[8], currDRange[9], 200, 300); //sub arcs?
		t.povertyFMapped = map(t.povertyF, currDRange[10], currDRange[11], 200, 300); //sub arcs?
		let tot = 0;
		let counter = 0;
		if (n == 4) {
			if (uiControlPop.cb4.checked()) {
				uiControlPop.cb1.checked(true);
				uiControlPop.cb2.checked(true);
				uiControlPop.cb3.checked(true);
				tot = parseInt(t.black) + parseInt(t.asian) + parseInt(t.white);
			} else {
				uiControlPop.cb1.checked(false);
				uiControlPop.cb2.checked(false);
				uiControlPop.cb3.checked(false);
				counter = 0;
				tot = 0;
			}
		} else {
			if (uiControlPop.cb1.checked()) {
				console.log("WHITE");
				tot += parseInt(t.white);
				counter++;
			} else {
				uiControlPop.cb4.checked(false);
			}
			if (uiControlPop.cb2.checked()) {
				console.log("ASIAN");
				tot += parseInt(t.asian);
				counter++;
			} else {
				uiControlPop.cb4.checked(false);
			}
			if (uiControlPop.cb3.checked()) {
				console.log("BLACK");
				tot += parseInt(t.black);
				counter++;
			} else {
				uiControlPop.cb4.checked(false);
				tot = 0;
				counter = 0;
			}
			if (counter >= 3) {
				uiControlPop.cb4.checked(true);
				tot = parseInt(t.black) + parseInt(t.asian) + parseInt(t.white);

			}

		}
		//		console.log(tot);
		//		console.log("w", t.white)
		//		console.log("b", t.black)
		//		console.log("a", t.asian)
		if (tot != 0) {
			t.whiteMapped = (t.white / tot) * 2 * PI
			t.asianMapped = (t.asian / tot) * 2 * PI
			t.blackMapped = (t.black / tot) * 2 * PI
		}


	})
}
/**
 * readFail: spits error message when relevant
 */
function readFail() {
	console.log("Read failed! Try again, sorry for the inconvenience");
}
