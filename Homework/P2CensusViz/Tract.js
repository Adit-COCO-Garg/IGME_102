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
		Tract.controller1();
		Tract.controller2();
		Tract.controller3();
		Tract.controller4();
		Tract.controller5();
		Tract.controller6();
		
		
    }
	static controller1(){
		this.control = createSlider(-100, 100);
        this.control.style("z-index", "100");
        this.control.size(70);
        this.control.position(620,120);
		console.log(this.control.value());
	}
	static controller2(){
		this.control2 = createSlider(-100, 100);
        this.control2.style("z-index", "100");
        this.control2.size(70);
        this.control2.position(620,220);
		console.log(this.control.value());
	}
	static controller3(){
		this.control3 = createSlider(-100, 100);
        this.control3.style("z-index", "100");
        this.control3.size(70);
        this.control3.position(620,320);
		console.log(this.control.value());
	}
	static controller4(){
		this.control4 = createSlider(-100, 100);
        this.control4.style("z-index", "100");
        this.control4.size(70);
        this.control4.position(620,420);
		console.log(this.control.value());
	}
	static controller5(){
		this.control5 = createSlider(-100, 100);
        this.control5.style("z-index", "100");
        this.control5.size(70);
        this.control5.position(620,520);
		console.log(this.control.value());
	}
	static controller6(){
		this.control6 = createSlider(-100, 100);
        this.control6.style("z-index", "100");
        this.control6.size(70);
        this.control6.position(620,620);
		console.log(this.control.value());
	}
    loadData(tracts) {
        console.log(tracts)
        tracts.forEach(fields => {
            if (!isNaN(fields[0])) {
                let currTract = fields.split("\t")
                this.id = currTract[0];
                this.lat = parseFloat(currTract[1]);
                this.long = -1 * parseFloat(currTract[2]);

            }
        })
    }
	modifier(){
		t=new CheckBox();
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

        
        
        fill("white")
        arc(this.xPos, this.yPos, this.popMapped*1.50, this.popMapped*1.50, 0, this.whiteMapped);
        let val=this.whiteMapped
        
        fill("yellow")
        arc(this.xPos, this.yPos, this.popMapped*1.50, this.popMapped*1.50, val, val + this.asianMapped);

        fill("black")
        val +=this.asianMapped
        arc(this.xPos, this.yPos, this.popMapped*1.50, this.popMapped*1.50, val, val + this.blackMapped);
        
        
        let hueVal = map(this.popMapped, w / 200, w / 180, 0, 1);
        let CRGB = colorScale(hueVal);
        CRGB = CRGB._rgb;
        fill(CRGB[0], CRGB[1], CRGB[2]);
        ellipse(this.xPos, this.yPos, this.popMapped, this.popMapped);
    }


}
