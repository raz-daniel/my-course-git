import Car from "./car.js";
export default class SportCar extends Car {
    constructor(carNum, company, model, color, engineVolume, maxSpeed, numberOfRaces) {
        super(carNum, company, model, color, engineVolume);
        this.maxSpeed = maxSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    displayCar() {
        super.displayCar();
        console.log(this.maxSpeed, this.numberOfRaces);
    }
}
