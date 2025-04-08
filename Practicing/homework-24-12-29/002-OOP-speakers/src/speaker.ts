export default class Speaker {

    color: string;
    volume: number;

    constructor(color: string, volume: number) {
        this.color = color
        this.volume = volume
    }

    displayTurnOn() {
        console.log(`Speaker just turned on`)
    }

    displayTurnOff() {
        console.log(`Speaker shut down`)
    }

    displaySound() {
        console.log(`Speaker just made a sound`)
    }

    displayObject() {
        console.log(`color is: ${this.color}, max volume limit: ${this.volume}`)
    }

}