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
		this.hue=(random(0,360));
		this.lerpVal=0;
		
	}

	stringinator(word,id){
		this.words.push(new Word(word,this.size,id));
		this.words.forEach((w)=>w.maxID=this.words.length);
	}
	display(){
		fill(this.hue,100,100);
		if (dist(mouseX,mouseY,this.x,this.y)<=(this.size/2)){
			this.lerpVal+=0.1*(1-this.lerpVal)
		} else{
			this.lerpval /= 1.1;
		}
		this.words.forEach((item)=>item.display(this.x, this.y,this.lerpVal));
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