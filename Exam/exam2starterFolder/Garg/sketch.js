/**
 * Adit Garg
 * IGME-102: Exam 2, 04/10/19
 * Retrieves a text file with raw data of books.
 * And displays books with appropriate info in classes.
 */

"use strict"; //catch some common coding errors

var library;

function preload(){
	library = new Bookshelf();
}
/**
 * setup :
 */
function setup() {
	createCanvas(800,800);
	library.loadCatalog();
	library.display();
}

