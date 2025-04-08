import Car from "./car.js";

export default class SportCar extends Car{

    constructor(
        carNum: number, 
        company: string, 
        model: string, 
        color: string, 
        engineVolume: number,
        readonly maxSpeed: number,
        public numberOfRaces: number
    ) {
        super(carNum, company, model, color, engineVolume)
    }

    displayCar() {
        super.displayCar()
        console.log(this.maxSpeed, this.numberOfRaces)
    }
}