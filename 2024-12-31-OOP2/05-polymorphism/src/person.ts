export default abstract class Person {
    constructor(
        public name: string,
        private birthdate: Date
    ) {

    }

    public printName() {
        console.log(this.name)
    }

    public abstract calcRevenue(): number;
}