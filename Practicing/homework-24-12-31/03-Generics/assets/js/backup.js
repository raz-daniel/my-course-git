export default class Backup {
    constructor(subject, value) {
        this.subject = subject;
        this.value = value;
    }
    display() {
        console.log(`subject: ${this.subject}, value: ${this.value}`);
    }
}
