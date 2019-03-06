/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

class Word{
	constructor(word,ranger,id){
		this.word=word;
		this.range=ranger;
		this.dx=0;
		this.dy=0;
		this.start= random(TWO_PI);
		this.spinner=random(0.1,1)*0.2;
		if (random(0,100)%2===1){
			this.spinner*=-1;
		}
		this.id=id;
		this.maxID=0;
	}
	display(x,y,lrp){
		this.dx=50*sin(this.start)+this.range;
		this.dy=50*cos(this.start)+this.range;
		//text(this.word,x+lerp(this.dx,0,lrp),y+lerp(this.dy,(this.id+this.maxID/2)*20,lrp));//I am still tinkering around with this code
		text(this.word,x+this.dx,y+this.dy);
		this.start+=this.spinner;
	}
}