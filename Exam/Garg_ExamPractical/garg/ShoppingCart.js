/**
* Adit Garg
* IGME-102: Practical Exam, 2/22/19
*/ 

"use strict"; //catch some common coding errors
/*
* Shopping Cart calss. 
*Params:
*treats: array to store treats
*/
class ShoppingCart{
	constructor(){
		this.treats=[];
		console.log("A shopping cart has been created.");
	}
	add(treat){//adds a treat object to the array
		this.treats.push(treat)
	}
	empty(){// destroys the array (clears it!)
		this.treats.splice(0);
		console.log("Cart has been emptied.")
	}
	getTotal(){//finds total of all items in cart
		let total=0;
		for (let i=0;i<this.treats.length;i++){
			total+=this.treats[i].price;
		}
		return total;
	}
	getString(){//creates a list of the items in the cart and returns it as a string
		let cstring="Shopping Cart: ";
		for (let i=0;i<this.treats.length;i++){
			cstring=cstring.concat(this.treats[i].getString());
		}
		cstring=cstring.concat("\nTotal: $");
		cstring=cstring.concat(this.getTotal());

		return cstring;
		
	}
	print(){// prints out the list of items in cart
		console.log(this.getString());
	}
	display(){//calls getstring method and uses p5 texxt to display it on the screen
		text(this.getString(),10,20);
	}
}