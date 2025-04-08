import Car from "./car.js";
import SportCar from "./sportCar.js";

const car1 = new Car(
    6246532,
    `Toyota`,
    `Yaris`,
    `yellow`,
    2000
)

const sCar1 = new SportCar(
    13254,
    `Formula1`,
    `JoJo`,
    `pink`,
    8200,
    460,
    62
)

car1.displayCar()
sCar1.displayCar()