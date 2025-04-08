import Book from "./book.js";
const book1 = new Book;
book1.name = `Harry Potter`,
    book1.author = `J.K Rowling`,
    book1.publish = `NoSe`,
    book1.price = 199;
book1.displayBook();
console.log(book1.getVAT());
