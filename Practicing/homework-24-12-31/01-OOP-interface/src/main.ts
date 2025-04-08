import Drum from "./drum.js";
import Guitar from "./guitar.js";
import Piano from "./piano.js";
import WingPiano from "./wing-piano.js";

const guitar = new Guitar('Classic 2VS', 'YAMAHA', 'Orange', 6)
guitar.display()
guitar.makeSound()

const drum = new Drum('Crazy SX', 'YAPOK', 'Black', 12)
drum.display()
drum.makeSound()

const piano = new Piano('Pianic', 'PoPo', 'Pink', 96)
piano.display()
piano.makeSound()

const wingPiano = new WingPiano('Pianolas', 'PoPa', 'blue', 120, 300)
wingPiano.display()
wingPiano.makeSound()

piano.test()
piano.tune()

wingPiano.test()
wingPiano.tune()
