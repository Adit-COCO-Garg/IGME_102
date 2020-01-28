class branch {
    constructor(location, angle, length) {
        this.loc = location;
		this.angle= angle;
        this.length = length;
        this.kids = [];
		this.tip=createVector(this.length,0);
		this.tip.rotate(this.angle)
		this.tip.add(this.loc)
		
		this.leaves=0;
		this.branchEnd=false;//KIDS NO EXIST THEN LAST BRANCH
		this.split();
    }

    split() {
        // make kids if length >= 1
        if (this.length >= 15) {
			let branchAngle=random(50,100)
            let angle1 = this.angle - branchAngle/2;
			let angle2 = this.angle + branchAngle/2;
//			let angle3 = this.angle + branchAngle/3;
//			let branchLength = this.length * random(0.4,0.8);
			this.kids.push(new branch(this.tip,angle1,this.length*random(0.4,0.8)))
			this.kids.push(new branch(this.tip,angle2,this.length*random(0.4,0.8)))
        }
    }

    display() {
        push(); //save orig coord system
        // draw line at loc
        translate(this.loc);
		rotate(this.angle);
        line(0, 0, this.length, 0);
        pop(); //restore orig coord system

        //call display for kids
        this.kids.forEach((kid) => {
            kid.display();
        });
    }
}