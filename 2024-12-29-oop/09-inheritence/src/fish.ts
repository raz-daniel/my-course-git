import Animal from "./animal.js";

export default class Fish extends Animal {

    public constructor (
        color: string,
        breed: string,
        price: number,
        private readonly isFreshWater: boolean 
    ) {
        super (color, breed, price)
    }

    public display() {
        super.display()
        console.log(`is Fresh Water Fish: ${this.isFreshWater}`)
    }
}