import Instrument from "./instrument.js";

export default class Guitar extends Instrument {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        private numOfStrings: number
    ) {
        super (model, manufacturer, color)
    }

    public display(): void {
        console.log (`Guitar: ${this.model} by ${this.manufacturer}, ${this.color} color, ${this.numOfStrings} strings`)
    }

    public makeSound(): void {
        console.log ('While my guitar gently weeps...')
    }

}