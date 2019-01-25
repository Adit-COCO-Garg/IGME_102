/**
 * Adit Garg
 * IGME-101: Assignment Name, m/d/18
 * Summarization of sketch activity
 */
"use strict"; //catch some common coding errors

//Global variables
var canvas, candy1, candy2,candy3,candy4, candy5;

/**
 * setup : Candy object's created and it's children are created and their properties are displayed
 */
function setup() {
    candy1 = new candy("purple");
    candy1.display();
    
    candy2 = new Regular("red",10);
    candy2.displayMore();
    
    candy3 = new Wrapped("multicolor",6);
    candy3.displayMore();
    
    candy4 = new ColorBomb("hot-pink",5);
    candy4.displayMore();
    
    candy5 = new Striped("hot-pink",5);
    candy5.displayMore();
}
