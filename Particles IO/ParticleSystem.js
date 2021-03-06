/*
 * Daniel Shiffman with W. Michelle Harris & Adit Garg
 * ParticleSystem class - ParticleSystem that has
 * location and an array of particles.
 * based on https://p5js.org/examples/simulate-particle-system.html
 */
class ParticleSystem {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.particles = [];
	}

	//add : add 1 particle to the particles array
	// randomize to choose 1 of 3 particle classes. wmh
	add() {
		let part; //will hold some kind of particle
		let chooser = random(); //randomize part class

		//33% chance for 1 of 3 classes of particle
		if (chooser < .33) {
			part = new Particle(this.x, this.y);
		} else if (chooser < .66) {
			part = new ParticleT(this.x, this.y);
		} else {
			part = new ParticleH(this.x, this.y);
		}
		//Add this particle to the array
		this.particles.push(part);
	}

	//run : Loop thru particles, updating & drawing them, and
	// if a particle isDead, remove it from particles array
	run() {
		//loop over particles in reverse to optimize speed
		//of any splicing
		for (let i = this.particles.length - 1; i >= 0; i--) {
			//current particle
			let p = this.particles[i];
			//update & draw current particle
			//move this particle if mouse is near. wmh
			p.moveIfNear(mouseX, mouseY);

			p.update();
			p.display();
			//if expired, remove current particle
			if (p.isDead()) {
				//remove this 1 particle from array
				this.particles.splice(i, 1);
			}
		}
	}
	/*
	* Displays all particles within the particles array and calls individual display functions
	*/
	display() {
		for (let part of this.particles) {
			part.display();
		}
	}
	/*
	* finds the loaded data fomr the jsson file and creates new particles based on them and defineds their velocity and other variables to the saved json's variables
	*/
	loadData(particleData) {
		for (let obj of particleData) {
			let part;
			if (obj["hue"] !== undefined) {
				part = new ParticleH();
				part.hue = obj.hue;
			} else if (obj["char"] !== undefined) {
				part = new ParticleT();
				part.char = obj.char;
			} else{
				part= new Particle();
			}
			part.x=obj.x;
			part.y=obj.y;
			part.velX=obj.velX;
			part.velY=obj.velY;
			part.gravity=obj.gravity;
			part.lifespan=obj.lifespan;
			this.particles.push(part);
		}
	}
}
