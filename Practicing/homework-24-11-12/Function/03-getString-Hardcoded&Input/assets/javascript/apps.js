// ********************
// Function - Exercise 03
// ********************

function printString(text, repeatCount) {
    if (typeof text !== `string`) return (`Invalid Input!`);
    for (let i = 0; i < repeatCount; i++) {
        document.write(`${text}<br>`)
    }
}

printString(`Welcome to Javascript Function World - GOOD LUCK!!!`, 10);
document.write(`<hr>`)
const userText = prompt(`Please enter your text`);
printString(userText, 10);