/*
* Daniel Shiffman with W. Michelle Harris
* Particle class - 1 Particle that has location,
velocity, gravity, and a limited lifespan.
* based on https://p5js.org/examples/simulate-particle-system.html
*/
class Particle {
    constructor(x, y) {
        //location
        this.x = x;
        this.y = y;
        
        //velocity & gravity
        this.velX = random(-1, 1);
        this.velY = random(-1, 0); //up!
        this.gravity = .05;
        
        //lifespan. also used for transparency
        this.lifespan = 255;
    }
    
    //update: update velocity based on gravity,
    // location based on velocity, and lifespan
    update() {
        //update velocity based on gravity
        this.velY += this.gravity;
        //location based on velocity
        this.x += this.velX;
        this.y += this.velY;
        
        this.lifespan -= 2;
    }
    
    //display: draw point with transparency based
    // on lifespan
    display() {
        strokeWeight(7);
        //transparency based on lifespan
        stroke(200, this.lifespan);
        //draw the particle
        point(this.x, this.y);
    }
    
    //isDead : is lifespan expired? Return boolean
    isDead() {
        return (this.lifespan < 0);
    }
    
    //moveIfNear : if given x-y is near this particle
    // give it anti-gravity bounce AND extend lifespan
    // so it has longer to fall. wmh
    moveIfNear(x, y) {
        if (dist(x, y, this.x, this.y) < 10) {
            this.velY -= .3;
            this.lifespan += 30;
        }
    }
}