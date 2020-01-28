class Tract {
	constructor(idT, x, y) {
		this.id = idT;
		this.lat = x;
		this.long = y;
		this.population = 0;
		this.mPop = 0;
		this.fPop = 0;
		this.medIncome = 0;
		this.povertyM = 0;
		this.povertyF = 0;
		this.white = 0;
		this.asian = 0;
		this.black = 0;
		this.xPos = 0;
		this.yPos = 0;
		this.popMapped = 0;
		this.mPopMapped = 0;
		this.fPopMapped = 0;
		this.medIncomeMapped = 0;
		this.povertyMMapped = 0;
		this.povertyFMapped = 0;
		this.whiteMapped = 0;
		this.asianMapped = 0;
		this.blackMapped = 0;



	}

	display() {
		let INCscale = chroma.scale();
		let ERGB = INCscale(this.medIncomeMapped);

		ERGB = ERGB._rgb;
		fill(ERGB[0], ERGB[1], ERGB[2]);
		if (!(this.medIncomeMapped < 0)) {
			ellipse(this.xPos, this.yPos, this.popMapped * 2.5, this.popMapped * 2.5);
		}


		fill("purple");
		let Mval = (2 * PI) * this.mPopMapped
		arc(this.xPos, this.yPos, this.popMapped * 2, this.popMapped * 2, 0, Mval);

		fill(255, 51, 153);
		arc(this.xPos, this.yPos, this.popMapped * 2, this.popMapped * 2, Mval, Mval + (2 * PI) * this.fPopMapped);

		//        fill(200,100,100);
		//        arc(this.xPos, this.yPos, 20, 20, 0, PI);
		//        arc(this.xPos, this.yPos, 70, 70, PI, PI + QUARTER_PI);
		//        
		//arc(this.xPos, this.yPos, 80, 80, PI + QUARTER_PI, TWO_PI);
		let val=0;
		if (uiControlPop.cb1.checked()) {
			fill("white")
			arc(this.xPos, this.yPos, this.popMapped * 1.50, this.popMapped * 1.50, 0, this.whiteMapped);
			val += this.whiteMapped
		}
		if (uiControlPop.cb2.checked()) {
			fill("yellow")
			arc(this.xPos, this.yPos, this.popMapped * 1.50, this.popMapped * 1.50, val, val + this.asianMapped);
			val += this.asianMapped
		}
		if (uiControlPop.cb3.checked()) {
			fill("black")
			arc(this.xPos, this.yPos, this.popMapped * 1.50, this.popMapped * 1.50, val, val + this.blackMapped);
			val += this.blackMapped
		}


		let hueVal = map(this.popMapped, w / 200, w / 180, 0, 1);
		let CRGB = colorScale(hueVal);
		CRGB = CRGB._rgb;
		fill(CRGB[0], CRGB[1], CRGB[2]);
		ellipse(this.xPos, this.yPos, this.popMapped, this.popMapped);
	}


}
