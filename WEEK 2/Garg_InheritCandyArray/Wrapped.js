/**
 * Adit Garg, 1/24/19
 * Wrapped class - creates a type of candy (child)
 * Properties:
 *  sugar: 10
 */
"use strict";

class Wrapped extends Candy {
    constructor(candyColor, x, y, size) {
        super(candyColor, x, y, size);
        this.sugar = 10;
        this.candyMatched = 0;
        this.specialPower = "Destroy candies surrounding it";
    }



    /* displayMore : Prints out class' sugar property and properties assigned to it via the parent class
     */
    displayMore() {
        print("sugar level of the candy is: " + this.sugar);
    }
    display(x, y, size) {
        print("The " + this.color + " candy requires " + this.candyMatched + " matched candies to spawn. ");
        createElement("br"); //line break tag
        print(this.color + " candy's special power is:" + this.specialPower);
        print("");
        fill(this.color);
        ellipse(x, y, size, size);
        rect(x, y, size-10, size-10);

    }
}
