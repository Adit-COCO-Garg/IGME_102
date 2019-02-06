"use strict";
class CandyStack extends stack {
	display() {
		for (let i = 0; i < this.data.length - 1; i++) {
			let y = (i * 30) + 50;
			candy.display(150, y, 100);
		}
	}
}
