/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

class Cloud{
	constructor(){
		this.words=[];
		this.size=70;
		this.x=random(500);
		this.y=random(500);
		this.xVel=random(0.1,0.8);
		this.yVel=random(0.1,0.8);
		this.hue=(random(0,360))
		
	}

	stringinator(word){
		this.words.push(new Word(word,this.size));
	}
	display(){
		fill(this.hue,100,100)
		this.words.forEach((item)=>item.display(this.x, this.y));
		if(innerHeight<this.y+this.yVel+this.size){
			this.yVel*=-1;
		}
		if(this.y+this.yVel+this.size<0){
			this.yVel*=-1;
		}
		if(innerWidth<this.x+this.xVel+this.size){
			this.xVel*=-1;
		}
		if(this.x+this.xVel+this.size<0){
			this.xVel*=-1;
		}
		this.x+=this.xVel;
		this.y+=this.yVel;
	}
}