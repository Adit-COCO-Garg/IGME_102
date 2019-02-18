/**
 * Adit Garg, 1/21/19
 * Candy class - Creates a parent candy object
 * Properties:
 *  Color 
 *  Number of candies to get a special candy 
 *  Special Power
 */
"use strict";

class Fish {
	constructor() {
		this.instan = 0
		this.yoff = 0.0;
		this.x = random(50, 950);
		this.xSpeed = -random(2, 5);
	}

	move() {
		this.x += this.xSpeed;
	}

	within() {

	}

	display(y, fType) {
		if(this.x<=50){
			this.x=1000;
		}
		image(fishiesImg[fType][floor(frameCount/4)%4], this.x, y, 50, 50);
	}



	water(y) {
		fill(187, 85, 82);
		// We are going to draw a polygon out of the wave points
		beginShape();

		let xoff = 0; // Option #1: 2D Noise
		// let xoff = yoff; // Option #2: 1D Noise

		// Iterate over horizontal pixels
		for (let x = 0; x <= width; x += 10) {
			// Calculate a y value according to noise, map to

			// Option #1: 2D Noise
			let y = map(noise(xoff, this.yoff), 0, 0.1, 96, 100);

			// Option #2: 1D Noise
			// let y = map(noise(xoff), 0, 1, 200,300);

			// Set the vertex
			vertex(x, y);
			// Increment x dimension for noise
			xoff += 0.01;
		}
		// increment y dimension for noise
		this.yoff += 0.003; //speed of wavy boi
		vertex(width, height);
		vertex(0, height);
		endShape(CLOSE);
	}
}

//		noFill();
//		stroke(187,85,82);
//		strokeWeight(5);
//		background("white");
//
//		// We are going to draw a polygon out of the wave points
//		beginShape();
//
//		let xoff = 0; // Option #1: 2D Noise
//		// let xoff = yoff; // Option #2: 1D Noise
//
//		// Iterate over horizontal pixels
//		for (let x = 0; x <= width; x += 10) {
//			// Calculate a y value according to noise, map to
//
//			// Option #1: 2D Noise
//			let y = map(noise(xoff, this.yoff), 0, 1, 200, 250);
//
//			// Option #2: 1D Noise
//			// let y = map(noise(xoff), 0, 1, 200,300);
//
//			// Set the vertex
//			vertex(x, y);
//			// Increment x dimension for noise
//			xoff += 0.05;
//		}
//		// increment y dimension for noise
//		this.yoff += 0.01;//speed of wavy boi
//
//		endShape();
