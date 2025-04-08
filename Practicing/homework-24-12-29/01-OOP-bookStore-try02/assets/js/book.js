class Book {
    //methods
    displayBook() {
        console.log(`name: ${this.name}, author ${this.author}, publish: ${this.publish}, price: ${this.price}`);
    }
    getVAT() {
        return this.price * (1 + Book.VAT);
    }
}
Book.VAT = 0.17;
export default Book;
