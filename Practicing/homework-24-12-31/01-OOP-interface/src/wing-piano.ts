import Piano from "./piano.js";

export default class WingPiano extends Piano {

    public constructor (
        model: string,
        manufacturer: string,
        color: string,
        keyPress: number,
        private length: number
    ) {
        super (model, manufacturer, color, keyPress)
    }

    public display(): void {
        super.display()
        console.log (`length: ${this.length} meter.`)
    }

    public makeSound(): void {
        console.log ('wing piano sounds... amazing like flying...')
    }

}