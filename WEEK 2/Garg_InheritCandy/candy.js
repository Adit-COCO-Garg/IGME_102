/**
 * Adit Garg, 1/21/19
 * Candy class - Creates a parent candy object
 * Properties:
 *  Color 
 *  Number of candies to get a special candy 
 *  Special Power
 */
"use strict";

class candy {
    constructor(colorval,matched = 0,sPower="Match 3 of these candies in a row to earn points!") {
        this.color = colorval;
        this.candyMatched = matched;
        this.specialPower = sPower;
        print ("Made a "+ this.color + " candy");
    }

    /* display : Prints out class' sugar property and properties assigned to it via the parent class
     */
    display() {
        print("The "+this.color+" candy requires "+this.candyMatched+" matched candies to spawn. ");
        print(this.color+" candy's special power is:"+this.specialPower);
    }
}
