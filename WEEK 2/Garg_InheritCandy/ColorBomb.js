/**
 * Adit Garg, 1/24/19
 * Candy class - creates a type of candy (child)
 * Properties:
 *  sugar=3
 */
"use strict";

class ColorBomb extends candy {
    constructor(colorval) {
        super(colorval,5," Destroy candies surrounding it");
        this.sugar=3;
    }


    /* displayMore : Prints out class' sugar property and properties assigned to it via the parent class
     */
    displayMore() {
        super.display();
        print("sugar level of the candy is: "+this.sugar);
    }
}
