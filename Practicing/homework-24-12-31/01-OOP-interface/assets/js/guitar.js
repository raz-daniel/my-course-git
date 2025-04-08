import Instrument from "./instrument.js";
export default class Guitar extends Instrument {
    constructor(model, manufacturer, color, numOfStrings) {
        super(model, manufacturer, color);
        this.numOfStrings = numOfStrings;
    }
    display() {
        console.log(`Guitar: ${this.model} by ${this.manufacturer}, ${this.color} color, ${this.numOfStrings} strings`);
    }
    makeSound() {
        console.log('While my guitar gently weeps...');
    }
}
