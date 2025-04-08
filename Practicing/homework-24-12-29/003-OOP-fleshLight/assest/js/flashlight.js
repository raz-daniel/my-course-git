export default class Flashlight {
    constructor(color, length, lightVolume, numberOfBatteries) {
        this.color = color;
        this.length = length;
        this.lightVolume = lightVolume;
        this.numberOfBatteries = numberOfBatteries;
    }
    displayOn() {
        console.log(`Flashlight turned on`);
    }
    displayOff() {
        console.log(`Flashlight is off`);
    }
    displayBatteries() {
        console.log(`Batteries needs replace`);
    }
    displayFlashlightProp() {
        console.log(`color is: ${this.color}, length is: ${this.length}, light volume is: ${this.lightVolume}, number of batteries: ${this.numberOfBatteries}`);
    }
}
