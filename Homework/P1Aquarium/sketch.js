/**
 * Adit Garg
 * IGME-102: Project1: aquarium, 02/18/19
 * Creates a fish tank of sorts and creates fish objects
 * that move and can be killed and created. Press P( or p) for
 * a suprise, Press S (or s) to pause said "suprise"
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, fishies = [],
    fishiesImg = [], fishWrig=[],
    fishSchool, fish, song, waterBackgorund, hookFont;

//	Fish Sprites taken from: https://opengameart.org/content/fish-sprite-sheet 

function preload() {
    for (let i = 0; i < 3; i++) {
        // local variables for inner array
        let innerA = [], innerB = [];
        for (let j = 0; j < 4; j++) {
            innerA.push(loadImage("Assets/Fish" + (i + 1) + "/fish" + (j + 1) + ".png"));
            innerB.push(loadImage("Assets/FishWriggle/Fish" + (i + 1) + "/fish" + (j + 1) + ".png"));
        }
        //add finished inner array to fishies
        fishiesImg.push(innerA);
        fishWrig.push(innerB);
    }
    song = loadSound('Assets/song.mp3');//	The music “Shakira: Hips Don’t Lie” was taken from: https://playvk.com/en/song/Shakira/Hips+Don't+Lie+(feat.+Wyclef+Jean)
    hookFont = loadFont('Assets/IndieFlower.ttf')//taken from google fonts

}
/**
 * setup : calls canvas creator function. Then, defines an array of fish objects returned from
 * stock aquarium. Then calls the water background function to draw ocean like water in the back
 */
function setup() {
    canvasCreat(); //canvas creator function called
    fishSchool = stockAquarium(10);//number of fish objects to be created
    waterBackgorund = new Fish();// ocean background
}

/**
 * draw : Clears frame each frame and makes a sun. Also, ocean is drawn, and the fishSchool objects'
 * display method is called and then those objects' move method is called. This function, also draws
 * a hook if mouse is pressed.
 */
function draw() {
    background(189, 15, 100);
    fill("orange");
    noStroke();
    ellipse(900, 100, 200, 200);//sun drawn
    waterBackgorund.waterBack();// ocean background drawn

    for (let i = fishSchool.length - 1; i >= 0; i--) {//fischool objects displayed and moved
        fishSchool[i].display(((i * 600) / (fishSchool.length)) + 160);
        fishSchool[i].move();
    }
    if (mouseIsPressed) {//if mouse is pressed than a hook is drawn
        strokeWeight(1);
        stroke("black");
        fill("black");
        textSize(40)
        text("j",mouseX+5,mouseY-6)
    }
}
/**
 * canvasCreat : Canvas creator code and defaults
 * creates a canvas and sets some default values
 */
function canvasCreat() {
    //Canvas setup
    canvas = createCanvas(1000, 800); // defining the canvas as a variable allows it to be versatile
    canvas.position(20, 20); //due to the variable's versatility the DOM library allows to define position
    canvas.style("z-index", "-1"); //due to the variable's versatility the DOM library allows to define the hirearchy of view/ z index (a css property)
    colorMode(HSB, 360, 100, 100); //color mode set to HSB
    //--------
    noStroke();
    imageMode(CENTER);
    textFont(hookFont);
}

/**
 * getNewFish: Returns a new fish object of a random fish type
 */
function getNewFish() {
    let newFish = null;
    let fishDecider = int(random(1, 4));
    if (fishDecider === 1) {
        newFish = new fish1();
    } else if (fishDecider === 2) {
        newFish = new fish2();
    } else if (fishDecider === 3) {
        newFish = new fish3();
    }
    return newFish;
}

/**
 * keyTyped: Checks if user has typed the key p, P or s,S
 * and plays (p) or pauses(S) the music
 */
function keyTyped() {
    if ((key === 'p') || (key === 'P')) {//checks if user has typed P or p
        song.play();// plays song
    } else if ((key === 's') || (key === 'S')) {//checks if user has typed S or s
        song.pause();// pauses song
    }
}

/**
 * mouseClicked: If mnouse is clicked then function checks if the click is within bounds the 
 * target box of the fish. If yes, then kill the fish and make a new random fish with the old one's x
 * position
 */
function mouseClicked() {
    let replaceMe = -1;// stores index of fish to be replaced. -1 if not within bounds
    for (let i = fishSchool.length - 1; i >= 0; i--) {//iterate over all fishes
        if (fishSchool[i].within(mouseX, mouseY)) {// checks if mouse position is within bounds
            replaceMe = i;// changes replaceMe value to the current index of the fish
        }
        if (replaceMe > -1) {//if replace me has a fish index i.e greater than -1 then
            let oldFishX = fishSchool[replaceMe].x;// store old fish's x position
            fishSchool[replaceMe] = getNewFish();//kill old fish, make new fish
            fishSchool[replaceMe].x = oldFishX;// replace new fish's x with old one's x
        }
    }
}

/**
 * stockAquarium: Takes in param numFish (number of fishes to be made), and then stocks the fishies
 * array with new fishes and returns it as an array
 */
function stockAquarium(numFish) {
    fishies = [];
    console.log("***** Stocking the aquariums! *****");
    for (let i = 0; i <= numFish - 1; i++) {
        fishies.push(getNewFish());
    }
    return fishies;
}
