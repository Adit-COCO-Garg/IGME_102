/**
 * Adit Garg, 1/21/19
 * Pac class - modelling simplified pacman munching animation
 * properties:
 *  x and y : location coordinates of center of arc
 *  halfAngle : half the width of the current mouth
 *              opening angle. Min 0, max 45 degrees.
 *  speed : 1 or -1; speed of halfAngle change per frame
 */
"use strict";

//THE FOLLOWING CODE IS ADAPTED FROM Prof. W. Michelle Harris' 102.1-3 demo random while loop and class
class Pac {
    /* constructor: init properties
    * @param x : x-coord of location
    * @param y : y-coord of location
    */
    constructor(x, y) {
        this.halfAngle = random(2, 45); //half the angle of mouth opening
        this.x = x;// x location coordinates
        this.y = y;// y location coordinates
        this.speed = 5; //speed of pac-man chomping
            
    }
    
    /* update: update halfAngle by speed property, 
     *  checking halfAngle boundaries, and reversing speed
     *  if needed
    */
    update() {
        this.halfAngle += this.speed; //update halfAngle
        if (this.halfAngle > 45 ) {//If half angle is bigger than 45, start closing
            this.speed*=-1;
            this.halfAngle = 45;
        } else if (this.halfAngle < 2) {//If half angle is smaller than 2, start opening
            this.speed*=-1;
            this.halfAngle = 2;
        }
    }
    
    /* display : Draw this pac to the canvas
    */
    display() {
        fill(56, 100, 100);
        arc(this.x, this.y, 100, 100, radians(this.halfAngle), radians(360 - this.halfAngle) );
    }
}