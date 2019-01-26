/**
 * Adit Garg, 1/24/19
 * Candy class - creates a type of candy (child)
 * Properties:
 *  sugar=3
 */
"use strict";

class ColorBomb extends Candy {
    constructor(candyColor, matched, sPower, x, y, size) {
        super(candyColor, matched, sPower, x, y, size);
        this.sugar = 3;
        super.candyMatched = 4;
        super.specialPower = "Destroy candies of that color";
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
        fill("black");
        ellipse(x, y, size/2, size/2);
        fill("red");
        ellipse(x, y, size/4, size/4);
    }
}
