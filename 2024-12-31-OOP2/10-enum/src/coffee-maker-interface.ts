import Maker from "./makers.js";
import Voltage from "./voltage.js";

export default interface CoffeeMaker {
    numberOfPins: number,
    numberOfMilkHotters: number,
    make: Maker,
    voltage: Voltage
}