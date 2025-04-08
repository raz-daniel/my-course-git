export default class Car {

    constructor(
        readonly carNum: number, 
        readonly company: string, 
        readonly model: string, 
        readonly color: string, 
        readonly engineVolume: number
    ) {
        
    }

    displayCar() {
        console.log(this.carNum, this.company, this.model, this.color, this.engineVolume)
    }
}