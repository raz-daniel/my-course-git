export default class Kitten {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    toString() {
        return `name: ${this.name}, age: ${this.age}, color: ${this.color}`;
    }
}
