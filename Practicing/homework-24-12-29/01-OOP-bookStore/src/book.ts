export default class Book {

    public name: string;
    public author: string;
    public publish: string;
    public price: number;

    private static readonly VAT: 0.17;

    public displayBook() {
        console.log(this.name)
        console.log(this.author)
        console.log(this.publish)
        console.log(this.price)
    };

    
    public displayFullPrice() {
        console.log(this.price * (1+Book.VAT))
    }
    
    



}