/*
* W. Michelle Harris adapted from Daniel Shiffman
* ParticleT class - 1 Particle that has a character and location,
velocity, gravity, and a limited lifespan.
* based on https://p5js.org/examples/simulate-particle-system.html
*/
class ParticleT extends Particle {
    constructor(x, y) {
        super(x, y);
        /* ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
        */
        //Change random key code into a character string
        this.char = String.fromCharCode(round(random(65, 90)));
        
    }
    
    //display : override regular Particle to draw text,
    //instead of point
    display() {
        //transparency from lifespan property
        fill( 200, this.lifespan);
        noStroke();
        //draw character at location
        text(this.char, this.x, this.y);
    }
}
