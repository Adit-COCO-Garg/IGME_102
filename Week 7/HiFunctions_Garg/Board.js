/**
 * Adit Garg, 1/27/2019
 * Board : Creates a candy board andcandies
 */
class Board {
    /**
     * constructor: make cell with x-coord, y cord, color. margin and size
     */
    constructor() {
        this.candies = [];
        this.colors = ["Indigo", "GreenYellow", "DeepPink", "Crimson"];
        this.size = 50;
        this.margin = 70;
        this.cols = 8;
        this.rows = 6;
        //Fill 2D array of GCell objects
        for (let c = 0; c < (this.cols); c++) {
            let candyColumn = []; //localVariable for a row of cells
            for (let r = 0; r < (this.rows); r++) {
                candyColumn.push(this.getNewCandy());
            }
            //force line break between rows of controls
            createElement("br"); //line break tag
            this.candies.push(candyColumn); //each row gets pushed one by one

        }
    }

    getNewCandy() {//makes a new candy
        let candy;
        let candyColor = this.colors[floor(random(this.colors.length))];
        let candyPicker = floor(random(this.colors.length));

        if (candyPicker < 1) {
            candy = new ColorBomb(candyColor);
        } else if (candyPicker < 2) {
            candy = new Striped(candyColor);
        } else if (candyPicker < 3) {
            candy = new Wrapped(candyColor);
        } else {
            candy = new Regular(candyColor);
        }
        return candy;
    }
    /**
     * display: draw name on canvas at location coords
     */
    display() {
        //Access each row in candies
        for (let c = 0; c < (this.cols); c++) {
            let candyColumn = []; //localVariable for a row of cells
            for (let r = 0; r < (this.rows); r++) {
                let x = this.margin + c * this.size;
                let y = this.margin + r * this.size;
                this.candies[c][r].display(x, y, this.size);
            }
        }

    }
}
