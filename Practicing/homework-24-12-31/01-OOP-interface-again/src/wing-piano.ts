import Piano from "./piano.js";

export default class WingPiano extends Piano {

    public constructor (
    model: string,
    manufacturer: string,
    color: string,
    keyNum: number,
    private length: number

) {
    super(model, manufacturer, color, keyNum)
}

display(): void {
    console.log(`my${this.length} Meters ${this.color} Piano: model: ${this.model}, made by: ${this.manufacturer} and have ${this.keyNum} keys.`)
}

makeSound(): void {
    console.log(`Piano Flyes....`)
}
}