import Animal from "./animal.js";
export default class Fish extends Animal {
    constructor(color, breed, price, isFreshWater) {
        super(color, breed, price);
        this.isFreshWater = isFreshWater;
    }
    display() {
        super.display();
        console.log(`is Fresh Water Fish: ${this.isFreshWater}`);
    }
}
