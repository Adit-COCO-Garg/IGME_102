"use strict";
class stack {
	constructor(dataArray = []) {
		this.data=dataArray;
		this.size=this.data.length;
	}

	//Two properties to set: data array (from parameter) and size (based on parameter length). The default value for dataArray is an empty array.
	pop() {
		this.size--;
		return this.data.pop();
		
	}
	//Remove (and return) the data on top. Update size.
	push(newdata) {
		this.size++;
		this.data.push(newdata);
	}
	//
	//Add new data to the top of the stack. Update size.
	//
	//
	peek() {
		return this.data[this.size-1];
	}
	//
	//Get the item on top of the stack, but don't remove it
	//
	//Return that item (or undefined if none)
	//
	contains(data) {
		return this.data.includes(data);
	}
	//
	//Return true if the data is in the stack, otherwise return false
	//
	clear() {
		this.data.splice();
	}
	//
	//Make the data array empty. Update size.
	//
	toString() {
		return this.data.toString();
	}
	//
	//Return string version of the data array in the stack

}
