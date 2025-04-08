import Instrument from "./instrument.js";
export default class Drum extends Instrument {
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    display() {
        console.log(`Drum: ${this.model} by ${this.manufacturer}, ${this.color} color, diameter is: ${this.diameter} inch`);
    }
    makeSound() {
        console.log('drummin... drummin...');
    }
}
