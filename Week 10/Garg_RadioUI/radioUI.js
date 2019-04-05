/* WM Harris
 * Class to manage a Radio form element and
 * some associated data to be added later.
 * A static method and property tracks how
 * many instances.
 * There is a static method for the radio 
 * callback event as well.
 */

/**
* setup : constructs a radio object. A prompt is passed into the object.
*/
class RadioUI {
    constructor(prompt) {
        this.id = RadioUI.getCounter();
        createSpan(prompt + this.id);
        this.state = "off";
        this.radio = createRadio();
        this.radio.option("On", this.id + "|on");
        this.radio.option("Off", this.id + "|off");
        this.radio.value(this.id + "|off");
        this.radio.changed(RadioUI.radioCallback);

    }
	/**
	* display : Displays squares with varying apparences 
	*/
	display(){

		if (this.state=="off"){
			fill("black");
			stroke("white")
		} else{
			fill("white");
		}
		rect(250,50+200*(this.id-1),100,100);
	}

	/**
	* radioCallback : everytime a change is detected the following function is called which prints out some properites of the radio object and manages their state 
	*/
    static radioCallback() {
        //"this" will be a RADIO, not the class
        let [id, state] = this.value().split("|");
        console.log(id, state);
        let foundRadio = allControls.find(quiz => {
            return quiz.id === Number(id);
        });
        if (foundRadio) { //did we find it?
            print("found?", foundRadio);
            foundRadio.state = state;
        }
    }

    /* getCounter - increment static
     * property, .count, and return its
     * value.
     */
    static getCounter() {
        if (this.count) { //truthy?
            this.count += 1;
        } else { //doesn't exist. init
            this.count = 1;
        }
        return this.count;
    }
}