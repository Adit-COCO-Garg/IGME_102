class checkers extends Tract{
    constructor() {
        this.control = createSlider(-100, 100);
        this.control.style("z-index", "2");
        this.control.size(70);
        this.control.position(620,120);
    }

    controlVal() {
        return this.control.value();
    }
   


}
