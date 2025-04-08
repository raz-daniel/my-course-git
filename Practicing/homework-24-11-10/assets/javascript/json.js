// *****************      JSON        ************************
// ************** Homework! Exercise 01  *********************

//************************ 01 *********************************
// Hard ware array of 3 books objects containing code, name, author and price; To JSON and Back and Prints!

/*
const books = [{ID: `T5243`, Name: `Talk's with god`, Author: `Nill Donald Walsh`, Price: 150},{ID: `B9274`, Name: `Breaking the habit of being yourself`, Author: `Joe Dispenza`, Price: 220},{ID: `T8292`, Name: `The 4th Agreements`, Author: `Don Miguel Louis`, Price: 120}];
const toJsonBooks = JSON.stringify(books);
alert(toJsonBooks);
const items = JSON.parse(toJsonBooks);
console.log("Original books array:");
console.log(books);
console.log("New items array:");
console.log(items);
for (const book of items) {
    console.log(`----------------------`);
    for (const key in book) {
        console.log(`Book ${key}: ${book[key]}`);
    }
}
console.log(`----------------------`)
*/

//************************ 02 *********************************
// Object Cat - 4 parameters.
/*
const myCat = {name: `Peter`, age: 3, color: `light grey`, sterilized: true};
const catToJson = JSON.stringify(myCat);
alert(catToJson);
const yourCat = JSON.parse(catToJson);
console.log("Your Cat's details:");
for (const key in yourCat) {
    console.log(`${key === `sterilized` ? `Is Sterilized` : key.charAt(0).toUpperCase() + key.slice(1)}: ${yourCat[key]}`);
}
*/