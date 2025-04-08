// ********************************
// Down & Up Triangle - Exercise 19
// ********************************

function printAsterisks(length) {
    for (let i = 1; i <= length; i++) {
        document.write(`* &nbsp;`);
    }
    document.write(`<br>`);
}

function printDescendingTriangle(length) {
    for (let i = length; i >= 1; i--) {
        printAsterisks(i);
    }
}

function printAscendingTriangle(length) {
    for (let i = 1; i <= length; i++) {
        printAsterisks(i);
    }
}

function printDescendingAndAscendingTriangle(length) {
    if (isNaN(length) || length < 1) {
        document.write(`Error: positive numbers only!`);
        return;
    }
    printDescendingTriangle(length);
    printAscendingTriangle(length);
}

printDescendingAndAscendingTriangle(+prompt(`Enter a positive number`));




