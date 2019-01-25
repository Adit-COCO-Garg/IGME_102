/**
 * Adit Garg, 1/24/19
 * Wrapped class - creates a type of candy (child)
 * Properties:
 *  sugar: 10
 */
"use strict";

class Wrapped extends candy {
    constructor(colorval,matched,sPower,x,y,size) {
        super(colorval,matched,sPower,x,y,size);
        this.sugar=10;
    }



    /* displayMore : Prints out class' sugar property and properties assigned to it via the parent class
     */
    displayMore() {
        super.display();
        print("sugar level of the candy is: "+this.sugar);
    }
}
