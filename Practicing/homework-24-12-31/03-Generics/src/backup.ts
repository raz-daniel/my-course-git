export default class Backup<T> {

    public constructor(
        private readonly subject: string,
        private readonly value: T
    ) { }
    
    public display() {
        console.log(`subject: ${this.subject}, value: ${this.value}`)
    }
}