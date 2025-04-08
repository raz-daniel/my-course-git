// ***********************
// 7 BOOM - Home Exercise
// ***********************

function isValid(input) {
    return input.trim() !== "" && 
    !isNaN(input) && 
    +input > 0
}

function isBoom(num) {
    if (num % 7 === 0) return true;

    while (num > 0) {
        if (num % 10 === 7) return true;
        num = Math.floor(num/10);
    }
    return false;
}

function displayValue(value) {
    const result = isBoom(value) ? `Boom` : value;
    document.write(`${result}<br>`);
}

const userInput = prompt(`7 BOOM: Enter a positive number`);

if (isValid(userInput)) {
    const maxNumber = +userInput;

    for (let i=1; i<=maxNumber; i++) {
        displayValue(i);
    }
} else {
    document.write(`Error - enter positive numbers only!`)
}
