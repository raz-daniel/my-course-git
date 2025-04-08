export default class Kitten {
    public constructor(
        private readonly name: string,
        private readonly age: number,
        private readonly color: string,
    ) {}
    toString(): string {
        return `name: ${this.name}, age: ${this.age}, color: ${this.color}`
    }
}
