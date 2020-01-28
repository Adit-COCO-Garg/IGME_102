/**
 * Adit Garg
 * IGME-102: Final Exam, 5/3/19
 * BeadLine Class:
 * @param: location: vector position of current mouse location
 * properties
 *     location: param
 *     birth: framecount
 */

"use strict";


class BeadLine {
	constructor(location) {
		this.location = location;
		this.birth = frameCount;
	}
	/**
	 * display : draws a line of beads that seem to be following the target
	 */
	display(target) {
		let diffVector = p5.Vector.sub(target, this.location);//finds the difference vector between the target and the root of the beadline
		translate(this.location);//Translates origin of canvas to the location of the property this.location
		rotate(diffVector.heading());//rotates canvas by the angle formed by the diff vector
		for (let i = 0; i < 50; i++) {//draws 50 beads
			fill(this.birth % 360, 55 + i * 1.1, 100);//applies fills based on arithmetic on this.birth and looper variable
			ellipse(i * 15, 0, 10, 10);
		}
		resetMatrix();//resets matrix of current canvas iteration
	}
}
