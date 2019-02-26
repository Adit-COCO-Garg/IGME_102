/**
 * Adit Garg, 02/18/19
 * Fish class - Creates a parent fish object
 * Properties:
 *  yoff = offset for waves;
 *  x = rando, fish x position;
 *  xSpeed = speed of fish;
 *  tracks y value of a fish row
 *  letgo tracks if fish is stuck (mouse is over it)
 */
"use strict";

class Fish {
    constructor() {
        this.yoff = 0.0;
        this.x = random(50, 950);
        this.xSpeed = -random(2, 5);
        this.y = 0;
        this.letgo=1
    }

    /**
     * move : moves the fish
     */
    move() {
        if (this.within(mouseX,mouseY)){
            if (this.letgo===0){
                print("Oh no, let me go!");
                this.letgo=1
            }
        }
        else{
            this.letgo===0
            this.x += this.xSpeed;
        }
        
    }

    /**
     * within : checks if the points x and y are within the bounds. Returns boolean value
     */
    within(x, y) { 
        if (((x >= this.x - 30) && (x <= this.x + 30)) && ((y >= this.y - 30) && (y <= this.y + 30))) {
            return true;
        }
        return false;
    }
    
    /**
     * display : draws fish and water waves based upon x and y values. Y's passed into it as a
     * parameter. ftype tracks the type of fish
     */
    display(y, fType) {
        this.y = y;
        if (this.x <= -25) {
            this.x = 1000;
        }
        this.water(y);
        if (this.within(mouseX,mouseY)){
            image(fishWrig[fType][floor(frameCount / 4) % 4], this.x, y, 40, 40);
        }
        else{
            image(fishiesImg[fType][floor(frameCount / 4) % 4], this.x, y, 40, 40);
        }
        
        
    }

    /**
     * waterBack : draws the animated ocean backgorund
     */
    waterBack() {
        // THE CODE FOR THIS FUNCTION WAS ADAPTED FROM Daniel Shiffman: https://p5js.org/examples/math-noise-wave.html
        
        fill(187, 85, 82);// This is mine
        noStroke();// This is mine
        // We are going to draw a polygon out of the wave points
        beginShape();

        let xoff = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise

        // Iterate over horizontal pixels
        for (let x = 0; x <= width; x += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let y = map(noise(xoff, this.yoff), 0, 0.1, 50, 60);// This has been adapted

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200,300);

            // Set the vertex
            vertex(x, y);
            // Increment x dimension for noise
            xoff += 0.01;// This has been adapted
        }
        // increment y dimension for noise
        this.yoff += 0.003; //speed of wavy boi // This has been adapted
        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);
        
        // THE CODE FOR THIS FUNCTION WAS ADAPTED FROM Daniel Shiffman: https://p5js.org/examples/math-noise-wave.html
    }
    /**
     * water : draws water waves for each row of fish based upon the row's y value
     */
    water(yPos) {
        // THE CODE FOR THIS FUNCTION WAS ADAPTED FROM Daniel Shiffman: https://p5js.org/examples/math-noise-wave.html
        
        noFill(); // This is mine
        stroke(187, 83, 93); // This is mine
        strokeWeight(3); // This is mine
        // We are going to draw a polygon out of the wave points
        beginShape();
        let xoff = 0; // Option #1: 2D Noise
        // let xoff = yoff; // Option #2: 1D Noise
        // Iterate over horizontal pixels
        for (let x = 0; x <= width; x += 10) {
            // Calculate a y value according to noise, map to

            // Option #1: 2D Noise
            let y = map(noise(xoff, this.yoff), 0, 1, yPos - 5, yPos + 5); // This has been adapted

            // Option #2: 1D Noise
            // let y = map(noise(xoff), 0, 1, 200,300);

            // Set the vertex
            vertex(x, y);
            // Increment x dimension for noise
            xoff += 0.1; // This has been adapted
        }
        // increment y dimension for noise
        this.yoff += 0.05; //speed of wavy boi // This has been adapted
        endShape(); // This has been adapted
        
        // THE CODE FOR THIS FUNCTION WAS ADAPTED FROM Daniel Shiffman: https://p5js.org/examples/math-noise-wave.html
    }
}