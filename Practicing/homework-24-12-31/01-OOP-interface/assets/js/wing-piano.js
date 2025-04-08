import Piano from "./piano.js";
export default class WingPiano extends Piano {
    constructor(model, manufacturer, color, keyPress, length) {
        super(model, manufacturer, color, keyPress);
        this.length = length;
    }
    display() {
        super.display();
        console.log(`length: ${this.length} meter.`);
    }
    makeSound() {
        console.log('wing piano sounds... amazing like flying...');
    }
}
