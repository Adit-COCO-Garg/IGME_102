/**
 * Adit Garg
 * IGME-102: Adit Garg, 3/1/19
 * Preform some operations on arrays using higher order functions
 * and for each, filter, and map methods.
 */
"use strict"; //catch some common coding errors


/**
 * setup : Uses different array methods on the arrays. filter, map , for each and etc.
 */
function setup() {
	
	createCanvas(300, 300);
	candyBag.push(new Candy("Red"), new Regular("Green"), new ColorBomb("Blue"), new Striped("Yellow"), new Wrapped("purple"));
	candyBag.forEach(function (name) {
		name.display();//displays all names of the candies
	});
	print("Candies requiring 5 matches: ");
	let match5s = candyBag.filter(function (name) {
		return (name.matchReq === 5)//finds candies with 5 required matches
	});
	match5s.forEach(function (name) {
		name.displayMore();//calls upon displaymore val on each candy that requires 5 mathces 
	});
	let candyColors = candyBag.map(function (name) {
		return (name.color + " " + name.constructor.name)//returns a concacted string of  the color and the name of the candy type
	})
	candyColors.forEach(function (name) {
		text(name, random(0, width - 100), random(20, height));//places text around the canvas using candy colors' array
	})
}
