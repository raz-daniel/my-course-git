import Instrument from "./instrument.js";
export default class Piano extends Instrument {
    constructor(model, manufacturer, color, keyPress) {
        super(model, manufacturer, color);
        this.keyPress = keyPress;
    }
    display() {
        console.log(`Piano: ${this.model} by ${this.manufacturer}, ${this.color} color, key pressing num: ${this.keyPress}`);
    }
    makeSound() {
        console.log('piano sounds... amazing...');
    }
}
