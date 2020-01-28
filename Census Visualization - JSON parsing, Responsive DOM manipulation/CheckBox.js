class CheckBox {
    constructor(prompt) {
        this.id = CheckBox.getCounter() - 1;
        this.CBox = createCheckbox('Display', false);
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