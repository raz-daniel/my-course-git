export default class Cat {
    constructor(color, breed, price, numberOfSoulLeft) {
        this.color = color;
        this.breed = breed;
        this.price = price;
        this.numberOfSoulLeft = numberOfSoulLeft;
    }
    display() {
        console.log(`color: ${this.color}`);
        console.log(`breed: ${this.breed}`);
        console.log(`price: ${this.price}`);
        console.log(`numberOfSoulLeft: ${this.numberOfSoulLeft}`);
    }
}
