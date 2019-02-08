/**
 * Adit Garg, 1/21/19
 * CandyStack class - displays candies in the array
 */

"use strict";
class CandyStack extends stack {
	display() {
		for (let i = 0; i < this.size; i++) {
			let y = (i * 30) + 50;
			this.data[i].display(150, y, 100);
		}
	}
}
