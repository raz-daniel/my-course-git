// ***********************
// Function - Exercise 09
// ***********************

// function printArray(numArray) {
//     for (const num of numArray) {
//         document.write(`${num}, `)
//     }
// }

//trying what claude thought me - join and isarray
function printArray(numArray) {
    if (!Array.isArray(numArray)) {
        document.write(`Error: this is not an array!`);
        return
    }
    document.write(`${numArray.join(`, `)}`);
}

document.write(`The hard-coded numbers in the array are: `);
printArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
document.write(`<hr>`);

const randomArray = [];
const randomArrayLength = +prompt(`Enter random array length`);
if (!isNaN(randomArrayLength) && randomArrayLength > 0) {
    for (let i = 0; i < randomArrayLength; i++) {
        randomArray.push(parseInt(Math.random()*100));
    }
    document.write(`The ${randomArrayLength} random numbers in the array are: `);
    printArray(randomArray);
} else {
    alert(`Error: input must be positive number`);
}


