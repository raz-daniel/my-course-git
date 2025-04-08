export default class Book {
    
    //data 

    name: string;
    author: string;
    publish: string;
    price: number;

    static VAT = 0.17;
    //methods

    displayBook() {
        console.log(`name: ${this.name}, author ${this.author}, publish: ${this.publish}, price: ${this.price}`)
    }

    getVAT() {
        return this.price * (1 + Book.VAT)
    }
    
}