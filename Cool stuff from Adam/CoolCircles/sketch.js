function setup() {
    createCanvas(windowWidth, windowHeight-4);
    background(10);
	noStroke();
	
}

/**
* draw :
*/
function draw() {
    background(10);

    fill(" white");
	translate(width/2, height/2);
    recurse(mouseX - width/2, mouseY - height/2, 300);
}

function recurse(x, y, rad) {
    ellipse(x, y, rad/3, rad/3);
    rotate(10);
    if(rad > 10) {
        recurse(x + rad, y, rad/2.0);
        recurse(x - rad, y, rad/2.0);
        recurse(x, y + rad, rad/2.0);
        recurse(x, y - rad, rad/2.0);
    }
}