"use strict";

class pacMan{
	constructor(x,y){
		this.halfAngle= random(2,45);
		this.x=x;
		this.y=y;
		this.speed=1;
	}
	mouthAnimation(){
		
	}
	
	pacManDie(){
		
	}
	
	pacManPause(){
		
	}
	
	display(){
		fill(56, 100, 100);
		arc(300, 200, 100, 100, radians(halfAngle), radians(360 - halfAngle));
	}
	
}
