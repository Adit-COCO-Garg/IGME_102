/**
 * Adit Garg
 * IGME-102: Excercise: 9-3, 3/22/18
 * Prints out all the data present in the json file bydestructuring them into
 * an array of declared variables and then reformatting them into apporpriate
 * defined data types.
 */
"use strict"; //catch some common coding errors

/**
 * setup : loads a json file and preoforms an appropriate callback function
 */
function setup() {
	loadJSON("9-3censusData.json", readTracts, readFail);
}

/**
 * readTracts: takes in tracts as a parameter and for each 
 * tract generates fields and whille field is not a number,
 * prints those fields using the utility function print
 * tract which accepts fields as parameter
 */
function readTracts(tracts) {
	tracts.forEach(fields => {
		if (!isNaN(fields[0])) {
			printTract(fields);
		}
	})
}

/**
 * printTracts: takes in fields as a parameter, and reads appropriate data into
 * variables by destructuring them into an array of said variables and then
 * reformating them based on datatypes created before
 */
function printTract(fields) {
	let count = new Intl.NumberFormat('en-US');
	let percent = new Intl.NumberFormat('en-US', {
		style: 'percent'
	});
	let dollars = new Intl.NumberFormat('en-US', {
		style: 'currency',currency:"USD"
	});
	
	let [pop, male, female, poverty, income, value, , , , tractID] = fields;
	if (pop > 0) {
		console.log("Tract " + tractID + " population: " + pop + " =>" + percent.format(male/pop) + " male," + percent.format(female/pop) + " female." + "\n" + percent.format(poverty/pop)+" low poverty ratio, " + dollars.format(income) + " median residual value");
	} else {
		console.log("Tract" + tractID + " population: "+count.format(pop));
	}
}

/**
 * readFail: spits error message when relevant
 */
function readFail() {
	console.log("Read failed! Try again, sorry for the inconvenience");
}
