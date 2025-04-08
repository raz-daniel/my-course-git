import CoffeeMaker from "./coffee-maker-interface.js";
import Maker from "./makers.js";
import Voltage from "./voltage.js";

const coffeeMaker: CoffeeMaker = {
    numberOfMilkHotters: 2,
    numberOfPins: 4,
    make: Maker.LAVAZA,
    voltage: Voltage.V240
}

console.log(coffeeMaker)