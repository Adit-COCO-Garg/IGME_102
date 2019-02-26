/*
* W. Michelle Harris adapted from Daniel Shiffman
* ParticleH class - 1 Particle that has COLOR and location,
velocity, gravity, and a limited lifespan.
* based on https://p5js.org/examples/simulate-particle-system.html
*/
class ParticleH extends Particle {
    constructor(x, y) {
        super(x, y);
        this.hue = random(255);
        this.velY = random(-1.5, 0); //more UP than regular Particle
        
    }
    
    //display : override regular Particle to use color,
    //and do tiny line instead of point
    display() {
        //color based on hue and lifespan properties
        stroke(this.hue, 200, 200, this.lifespan);
        strokeWeight(3);
        //tiny line from current location to next location
        line(this.x, this.y, this.x + this.velX, this.y + this.velY);
    }
}