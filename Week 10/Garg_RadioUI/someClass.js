/* WM Harris 3/27/19
 * SomeClass - uses static property
 * and method to count its instances
 */
class SomeClass {
    //init static property to count
    //SomeClass instances
    //static count = 0;

    constructor(name) {
        this.name = name;
        //Call the static method to get
        //counter value
        this.id = SomeClass.getCounter();
        //or maybe .getCounter() - 1 to
        //be consistent with an array index
    } 
    
    display() {
        console.log(SomeClass.name, this.name, this.id);
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
