/**
 * WM Harris, 12/5/2018
 * GCell : one cell of text *that moves in circle*
 * to display on canvas
 */
class texBox {
	/**
	 * constructor: make cell with x-coord & name. Name animates in circle
	 * @param x - number, x-coord value
	 * @param y - number, y-coord value
	 * @param name - string, cell label
	 */
	constructor(x, y, name, hueVal) {
		this.x = x;
		this.y = y;


	}

	/**
	 * display: draw name on canvas at location coords
	 */
	display() {
		//bg of cell
		fill(319.7, 97.4, 89.4); //transparent light red
		rect(this.x, this.y, 90, 90);

		
	}
}
