/**
 * Daniel Shiffman with W. Michelle Harris & Adit Garg
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
    for (let line of moreParticles){
        console.log(line);
    }
	loadJSON("savedParticles.json",readParticles)
}

/**
 * draw :refreshes the background every call and draws particles
 */
function draw() {
	background(50);
	pSystem.display();
}

/**
 * key typed: The particle system's json data is screenshotted into a json file on a key typed event
 */
function keyTyped(){
    saveJSON(pSystem.particles, "savedParticles.json")
}

/**
 * readParticles: loads up all the the data from particledata parameter and calls load data and defines a frozen particle system
 */
function readParticles(particleData){
    pSystem.loadData(particleData);
}