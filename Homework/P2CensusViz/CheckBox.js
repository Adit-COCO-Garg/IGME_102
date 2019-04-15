class RadioUI {
    constructor(prompt) {
        this.id = RadioUI.getCounter() - 1;
        createSpan(this.id +  ". " + prompt + ":");
        this.state = "off";this.radio = createRadio();
        this.radio.option("On", this.id + "|on");
        this.radio.option("Off", this.id + "|off");
        this.radio.value(this.id + "|off");
        this.radio.changed(RadioUI.radioCallback);
    }
    static radioCallback() {//"this" will be a RADIO, not the class
        let [id, state] = this.value().split("|");
        console.log(id, state);
        let foundQuiz = allControls.find(quiz => {return quiz.id === Number(id);});
        if (foundQuiz) {
            print("found?", foundQuiz);foundQuiz.state = state;}
    }
    static getCounter() {
        if (this.count) {
            this.count += 1;
        } else {
            this.count = 1;
        }
        return this.count;}}