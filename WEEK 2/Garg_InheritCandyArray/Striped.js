/**
 * Adit Garg, 1/24/19
 * Candy class -creates a type of candy (child)
 * Properties:
 * sugar=7
 */
"use strict";

class Striped extends Candy {
    constructor(candyColor, x, y, size) {
        super(candyColor, x, y, size);
        this.sugar = 7;
        super.candyMatched = 3;
        super.specialPower = "Destroy all candies in the horizontal and vertical plane!";
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
        text("stripped", x, y);
    }
}
