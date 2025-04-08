export default class Book {
    displayBook() {
        console.log(this.name);
        console.log(this.author);
        console.log(this.publish);
        console.log(this.price);
    }
    ;
    displayFullPrice() {
        console.log(this.price * (1 + Book.VAT));
    }
}
