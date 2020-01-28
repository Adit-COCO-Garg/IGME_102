/**
 * Adit Garg, 1/21/19
 * ImageQueue class - displays images in the queue 
 */

"use strict";
class ImageQueue extends queue {
	display() {
		for (let i = 0; i < this.size; i++) {
			let y = (i * 110) + 10;
            image(this.data[(this.size-1)-i],40,y,100,100)
		}
	}
}
