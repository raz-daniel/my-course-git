export default class Animal {
    
    public static numOfAnimals = 0

    public constructor(
    private readonly color: string,
    private readonly breed: string,
    private price: number,
    ){
        Animal.numOfAnimals++
    }

    public static getNumberOfAnimals() {
        return Animal.numOfAnimals;
    }

    public display() {
        console.log(`color: ${this.color}`)
        console.log(`breed: ${this.breed}`)
        console.log(`price: ${this.price}`)
    }
}