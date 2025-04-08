import Piano from "./piano.js";
export default class WingPiano extends Piano {
    constructor(model, manufacturer, color, keyNum, length) {
        super(model, manufacturer, color, keyNum);
        this.length = length;
    }
    display() {
        console.log(`my${this.length} Meters ${this.color} Piano: model: ${this.model}, made by: ${this.manufacturer} and have ${this.keyNum} keys.`);
    }
    makeSound() {
        console.log(`Piano Flyes....`);
    }
}
