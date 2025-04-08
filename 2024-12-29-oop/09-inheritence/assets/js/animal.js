class Animal {
    constructor(color, breed, price) {
        this.color = color;
        this.breed = breed;
        this.price = price;
        Animal.numOfAnimals++;
    }
    static getNumberOfAnimals() {
        return Animal.numOfAnimals;
    }
    display() {
        console.log(`color: ${this.color}`);
        console.log(`breed: ${this.breed}`);
        console.log(`price: ${this.price}`);
    }
}
Animal.numOfAnimals = 0;
export default Animal;
