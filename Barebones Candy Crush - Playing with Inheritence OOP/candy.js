/**
 * Adit Garg, 1/21/19
 * Candy class - Creates a parent candy object
 * Properties:
 *  Color 
 *  Number of candies to get a special candy 
 *  Special Power
 */
"use strict";

class Candy {
    constructor(candyColor,x,y,size) {
        this.color = candyColor;
        this.candyMatched = 0;
        this.specialPower = "Match 3 of these candies in a row to earn points!";
		this.x=x;
		this.y=y;
		this.size=size;
    }

    /* display : Prints out class' sugar property and properties assigned to it via the parent class
     */
    display() {
        print("The "+this.color+" candy requires "+this.candyMatched+" matched candies to spawn. ");
        createElement("br"); //line break tag
        print(this.color+" candy's special power is:"+this.specialPower);
        print("");
		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
    }
}
