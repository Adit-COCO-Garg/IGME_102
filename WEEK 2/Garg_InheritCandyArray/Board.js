/**
 * WM Harris, 12/5/2018
 * GCell : one cell of text *that moves in circle*
 * to display on canvas
 */
class Board {
	/**
	 * constructor: make cell with x-coord & name. Name animates in circle
	 * @param x - number, x-coord value
	 * @param y - number, y-coord value
	 * @param name - string, cell label
	 */
	constructor(x, y, name, hueVal) {
		this.candies = [];
		this.colors = [[336, 100, 100], [276, 100, 100], [48, 100, 100], [135, 100, 80]];
		this.size = 50;
		this.margin = 70;
		this.cols = 8;
		this.rows = 6;
		//Fill 2D array of GCell objects
		let col = 0
		while (col < this.cols) {
			// local variable for inner array
			let candyColumn = [];
			let rows = 0
			while (row < this.rows) {
				let x = 57 + c * 97;
				let y = 56 + r * 95;
				candyColumn.push(getNewCandy());
			}
		}
		this.candies.push(candyColumn);
	}

	getNewCandy() {
		let candy, candyColor = floor(random(this.colors.length)),
			candyPicker = floor(random(0, 10));
		if (candyPicker < 1) {
			candy = new ColorBomb(candyColor);
		} else if (candyPicker < 2) {
			candy = new Stripped(candyColor);
		} else if (candyPicker < 3) {
			candy = new Wrapped(candyColor);
		} else {
			candy new Regular;
		}
		return candy;
	}
	/**
	 * display: draw name on canvas at location coords
	 */
	display(x,y,) {
		//bg of cell
		fill(319.7, 97.4, 89.4); //transparent light red
		rect(this.x, this.y, 90, 90);
		//Access each row in gcells
		for (let c = 0; c < this.cols; c++) {
			// local variable for inner array
			for (let r = 0; this.rows < 6; r++) {
				let x = this.margin + c * this.size;
				let y = this.margin + r * this.size;
				this.candies[c][r].display(x,y,this.size);
			}
		}
	}
