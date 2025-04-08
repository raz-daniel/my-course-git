import Flashlight from "./flashlight.js";

const flashlight1 = new Flashlight('yellow', 10, 38, 2)
const flashlight2 = new Flashlight('pink', 22, 120, 8)

flashlight1.displayOn()
flashlight1.displayOff()
flashlight1.displayBatteries()
flashlight1.displayFlashlightProp()

flashlight2.displayOn()
flashlight2.displayOff()
flashlight2.displayBatteries()
flashlight2.displayFlashlightProp()