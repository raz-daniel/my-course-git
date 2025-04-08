import Book from "./book.js";

const book1 = new Book();
book1.name = 'Harry Potter';
book1.author = `J.K. Rowling`;
book1.publish = "2001";
book1.price = 99

const book2 = new Book();
book2.name = "The Hobbit";
book2.author = "J.R.R. Tolkien";
book2.publish = "1937";
book2.price = 89;

const book3 = new Book();
book3.name = "1984";
book3.author = "George Orwell";
book3.publish = "1949";
book3.price = 79;

//display
console.log(`book 1 details:`)
book1.displayBook()
book1.displayFullPrice()

console.log("book 2 details:")
book2.displayBook()
book2.displayFullPrice()

console.log('book 3 details:')
book3.displayBook()
book3.displayFullPrice()