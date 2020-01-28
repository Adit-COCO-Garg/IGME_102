/**
 * Adit Garg
 * Adit Garg
 * IGME-102: foreach word play, 3/8/19
 * CLOUD CLASS
 */
"use strict"; //catch some common coding errors

class Cloud {
	constructor() {
		this.words = [];
		this.size = 70;
		this.x = random(500);
		this.y = random(500);
		this.xVel = random(0.1, 5);
		this.yVel = random(0.1, 5);
		this.hue = (random(0, 360));
		this.lerpVal = 0;
		this.mouseOn=null;

	}

	stringinator(word, id) {
		this.words.push(new Word(word, this.size, id));
		this.words.forEach((w) => w.maxID = this.words.length);
	}
	displays() {
		fill(this.hue, 100, 100);
		
		if (dist(mouseX, mouseY, this.x + this.size, this.y + this.size) <= this.size+6) {
			if (this.mouseOn==false){
				
				print("Oh no! Let me go! T-T");
			}
			fill(random(360),100,100);
			this.mouseOn = true;
			this.lerpVal += 0.1 * (1 - this.lerpVal);
		} else {
			if (this.mouseOn==true){
				print("MWAHAHAHAH You'll never catch me!!!! :P");
			}
			this.lerpVal /= 1.1;
			this.mouseOn =false;
		}
		
		if (innerHeight < this.y + this.yVel + this.size+40) {
			this.hue=random(360);
			this.yVel *= -1;
		}
		if (this.y + this.yVel + this.size+40 < 0) {
			this.hue=random(360);
			this.yVel *= -1;
		}
		if (innerWidth < this.x + this.xVel + this.size+40) {
			this.hue=random(360);
			this.xVel *= -1;
		}
		if (this.x + this.xVel + this.size+40 / 2 < 0) {
			this.hue=random(360);
			this.xVel *= -1;
		}
		if (this.mouseOn === false) {
			this.x += this.xVel;
			this.y += this.yVel;
		}
		this.score+=0.01;
		this.words.forEach((item) => item.display(this.x, this.y, this.lerpVal));

	}
}
