/**
 * Adit Garg, 1/21/19
 * stack class - creates a stack collection with stack functions
 * properties:
 * this.data: stack array
 * this.size: stack size
 */




// NOTE: THE COMMENTS ARE ADAPTED FROM THE ASSIGNMENT DOCUMENT

"use strict";
class stack {
	/*
	*Params: dataArray: Array of data 
	*/
	constructor(dataArray = []) {
		this.data=dataArray;
		this.size=this.data.length;
	}

	pop() {//Remove (and return) the data on top. Update size.
		let pop=this.data.pop()
		this.size=this.data.length;
		return pop;
	}
	
	push(newdata) {//Add new data to the top of the stack. Update size.
		this.data.push(newdata);
		this.size=this.data.length;
	}

	peek() {//Get the item on top of the stack and print it without removing it
		return this.data[this.size-1];
	}
	
	contains(data) {//Return true if the data is in the stack, otherwise return false
		return this.data.includes(data);
	}
	
	clear() {//Make the data array empty. Update size.
		this.data.splice(0);
		this.size=this.data.length;
	}

	
	toString() {//Return string version of the data array in the stack
		return this.data.toString();
	}
}
// NOTE: THE COMMENTS ARE ADAPTED FROM THE ASSIGNMENT DOCUMENT