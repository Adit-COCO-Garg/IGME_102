/**
 * Adit Garg
 * IGME-102: Ex 4-1:Sets - Garg, 2/5/19
 * Draw point clouds using an array and a
 * set where each point has a random hue
 * a modified x,y location.
 */

"use strict"; //catch some common coding errors

/**
 * setup : Initialization runs once; called automatically
 * Summarize code that you add
 */
function setup() {
    //Canvas setup
    createCanvas(450, 400); // defining the canvas
    colorMode(HSB, 100, 100, 100); //color mode set to HSB
    //--------
    strokeWeight(5); //stroke weight set to 5
    DrawArrayCloud(100, 200, 20);
    DrawSetCloud(100, 100, 20);
}

/**
 * DrawArrayCloud : Draws a bunch of points with random
 * hues and places them randomly using an array
 * Param:
 * x: X position of the point which is to be modified
 * y: y position of the point which is to be modified
 * count: number of points
 */
function DrawArrayCloud(x, y, count) {
    let pointArray = [];
    while (pointArray.length < count) {
        let dx = 20 * round(random(count));
        pointArray.push(dx);

    }
    console.log(pointArray)
    for (let item of pointArray) {
        stroke(random(0, 100), 100, 100);
        point(x + item, y + random(0, 40));

    }
}

/**
 * DrawSetCloud : Draws a bunch of points with random
 * hues and places them randomly using a set
 * Param:
 * x: X position of the point which is to be modified
 * y: y position of the point which is to be modified
 * count: number of points
 */
function DrawSetCloud(x, y, count) {
    let pointSet = new Set();
    while (pointSet.size < count) {
        let dx = 20 * round(random(count));
        pointSet.add(dx)
    }
    console.log(pointSet);
    for (let item of pointSet) {
        stroke(random(0, 100), 100, 100);
        point(x + item, y + random(0, 40));
    }

}
