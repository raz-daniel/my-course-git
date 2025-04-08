import Instrument from "./instrument.js";
import Tester from "./tester.js";

export default class Piano extends Instrument implements Tester {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        protected keyPress: number
    ) {
        super (model, manufacturer, color)
    }

    public display(): void {
        console.log (`Piano: ${this.model} by ${this.manufacturer}, ${this.color} color, key pressing num: ${this.keyPress}`)
    }

    public makeSound(): void {
        console.log ('piano sounds... amazing...')
    }

    test(): void {
        console.log(`testing Piano`)
    }

    tune(): void {
        console.log(`Tuning Piano`)
    } 

}