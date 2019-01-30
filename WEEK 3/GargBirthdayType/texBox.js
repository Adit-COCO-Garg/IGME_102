/**
 * Adit Garg, 1/29/2019
 * texBox: A class that has an excerpt bouncing within it
 */
class texBox {
    /**
     * constructor: make cell with x-coord & name. Name animates in circle
     * @param x - number, x-coord value
     * @param y - number, y-coord value
     * @param textExcerpt - excerpt
     */
    constructor(x, y, textExcerpt) {
        this.x = x;
        this.y = y;
        this.text = textExcerpt;
        this.a = this.x + random(-10, 10); //x-coord for the ball
        this.b = this.y + random(-10, 10); //y-coord for the ball
        this.aSign = 1; //direction variable for x set to positive
        this.bSign = 1; //direction variable for y set to positive
        this.aSpeed = 1;
        this.bSpeed = 1;

    }

    /**
     * display: draw name on canvas at location coords
     */
    display(mosX, mosY) {

        //bg of cell
        if (((mosX < this.x + 235) && (mosX > this.x - 235)) && ((mosY < this.y + 235) && (mosY > this.y - 235))) {
            fill(319.7, 97.4, 89.4); //transparent light red
        } else {
            fill("white");
        }
        rect(this.x, this.y, 470, 470);
        if (((mosX < this.x + 235) && (mosX > this.x - 235)) && ((mosY < this.y + 235) && (mosY > this.y - 235))) {
            fill("white");
        } else {
            fill(random(360), 100, 100);
            if ((this.a <= this.x - 110) || (this.a >= this.x + 110)) { //checks if the ball is within bounds
                this.aSign *= -1; // if it reaches out of bounds then change the direction
            }
            if ((this.b <= this.y - 110) || (this.b >= this.y + 280)) { //checks if the ball is within bounds
                this.bSign *= -1; // if it reaches out of bounds then change the direction
            }
            this.a += this.aSpeed * this.aSign; //changing velocity in x plane
            this.b += this.bSpeed * this.bSign; //changing velocity in y plane
        }
        text(this.text, this.a, this.b, 250, 250);
    }
}
