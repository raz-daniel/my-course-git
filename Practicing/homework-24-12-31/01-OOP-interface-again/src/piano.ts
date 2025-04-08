import Instrument from "./instrument.js";
import Tester from "./tester.js";

export default class Piano extends Instrument implements Tester{

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        protected keyNum: number

    ) {
        super(model, manufacturer, color)
    }

    display(): void {
        console.log(`my ${this.color}Piano: model: ${this.model}, made by: ${this.manufacturer} and have ${this.keyNum} keys.`)
    }
    
    makeSound(): void {
        console.log(`Piano Sounds....`)
    }

    test(): void {
        console.log(`testing!`)
    }

    tune(): void {
        console.log(`tuning!`)
    }

}
