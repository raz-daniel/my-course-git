import Instrument from "./instrument.js";
export default class Piano extends Instrument {
    constructor(model, manufacturer, color, keyNum) {
        super(model, manufacturer, color);
        this.keyNum = keyNum;
    }
    display() {
        console.log(`my ${this.color}Piano: model: ${this.model}, made by: ${this.manufacturer} and have ${this.keyNum} keys.`);
    }
    makeSound() {
        console.log(`Piano Sounds....`);
    }
    test() {
        console.log(`testing!`);
    }
    tune() {
        console.log(`tuning!`);
    }
}
