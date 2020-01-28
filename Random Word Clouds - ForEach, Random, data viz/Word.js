/**
 * Adit Garg
 * IGME-102: foreach word play, 3/8/19
 * WORD CLASS
 
 **********THE ANIMATION WAS INSPIRED FROM ADAM LATOWSKA'S CODE*********
 
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
		if (lrp==undefined){
			lrp=0;
		}
		text(this.word,x+lerp(this.dx,70,lrp),y+lerp(this.dy,(this.id+this.maxID/2)*20,lrp));//I am still tinkering around with this code
		//text(this.word,x+this.dx,y+this.dy);
		this.start+=this.spinner;
	}
}