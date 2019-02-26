/**
 * Daniel Shiffman with W. Michelle Harris
 * IGME-102: Particle System demo, 2/15/19
 * based on https://p5js.org/examples/simulate-particle-system.html
 * Particle System with 3 classes of particles reacting to gravity
 * and mouse-driven anti-gravity
 */

"use strict"; //catch some common coding errors
//Globals
let pSystem, moreParticles; //will hold Particle System instance

function preload(){
    moreParticles=loadStrings("otherparticles.txt");
}
/**
 * setup :
 */
function setup() {
	createCanvas(600, 700);
	colorMode(HSB, 255);
	pSystem = new ParticleSystem(width / 2, 100);
    for (let line in moreParticles){
        console.log(line);
    }
}

/**
 * draw :
 */
function draw() {
	background(50);
	pSystem.add(); //add new particle each frame
	pSystem.run();
}

function keyTyped(){
    saveJSON(pSystem.particles, "savedParticles.json")
}
function readParticles(particleData){
    pSystem.loadData(particleData);
}