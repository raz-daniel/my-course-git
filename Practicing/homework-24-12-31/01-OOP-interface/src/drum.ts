import Instrument from "./instrument.js";

export default class Drum extends Instrument {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        private diameter: number
    ) {
        super (model, manufacturer, color)
    }

    public display(): void {
        console.log (`Drum: ${this.model} by ${this.manufacturer}, ${this.color} color, diameter is: ${this.diameter} inch`)
    }

    public makeSound(): void {
        console.log ('drummin... drummin...')
    }

}