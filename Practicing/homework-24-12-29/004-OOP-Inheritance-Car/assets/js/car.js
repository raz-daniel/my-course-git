export default class Car {
    constructor(carNum, company, model, color, engineVolume) {
        this.carNum = carNum;
        this.company = company;
        this.model = model;
        this.color = color;
        this.engineVolume = engineVolume;
    }
    displayCar() {
        console.log(this.carNum, this.company, this.model, this.color, this.engineVolume);
    }
}
