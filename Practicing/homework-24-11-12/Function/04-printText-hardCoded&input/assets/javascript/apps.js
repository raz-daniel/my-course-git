// ********************
// Matrix - Exercise 04
// ********************

function printText(text, repeatCount) {
    if (typeof text !== `string`) return `Error: Invalid text input!`
    if (typeof repeatCount !== `number` || isNaN(repeatCount)) return `Error: Please enter a valid number!`
    for (let i = 0; i < repeatCount; i++) {
        document.write(`${i+1}: ${text}<br>`);
    }
}

printText(`Hello World`, 10);
document.write(`<hr>`);
const userText = prompt(`Enter your text:`);
const repeatCount = +prompt(`How many times to repeat?`);
printText(userText,repeatCount);