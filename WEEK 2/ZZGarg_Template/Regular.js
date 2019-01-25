/**
 * Adit Garg, 1/21/19
 * Candy class - modelling simplified pacman munching animation
 * Properties:
 *  Color 
 *  Number of candies to get a special candy 
 *  Special Power
 */
"use strict";

class candy {
    constructor(colorval) {
        this.color = colorval;
        this.candyMatched = 0;
        this.specialPower = "Match 3 of these candies in a row to earn points";
        print ("Made a "+ this.color + " candy");
    }

    /* update: 
     */
    update() {

    }

    /* display :
     */
    display() {
        print("run");
        print("The "+this.color+" candy requires 0 matched candies to spawn. ");
        print(this.color+"'s special power: Match 3 of these candies in a row to earn points!");
    }
}
