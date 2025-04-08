export default class Flashlight {
    color: string
    length: number
    lightVolume: number
    numberOfBatteries: number

    constructor(color: string, length: number, lightVolume: number, numberOfBatteries: number) {
        this.color = color
        this.length = length
        this.lightVolume = lightVolume
        this.numberOfBatteries = numberOfBatteries
    }

    displayOn() {
        console.log(`Flashlight turned on`)
    }

    displayOff() {
        console.log(`Flashlight is off`)
    }

    displayBatteries() {
        console.log(`Batteries needs replace`)
    }

    displayFlashlightProp() {
        console.log(`color is: ${this.color}, length is: ${this.length}, light volume is: ${this.lightVolume}, number of batteries: ${this.numberOfBatteries}`)
    }
}