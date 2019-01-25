/**
 * Adit Garg, 1/24/19
 * Candy class - creates a type of candy (child)
 * Properties:
 *  sugar = 5
 */
"use strict";

class Regular extends candy {
    constructor(colorval,matched,sPower,x,y,size) {
        super(colorval,matched,sPower,x,y,size);
        this.sugar=5;
    }


    /* displayMore : Prints out class' sugar property and properties assigned to it via the parent class
     */
    displayMore() {
        super.display();
        print("sugar level of the candy is: "+this.sugar);
    }
}

