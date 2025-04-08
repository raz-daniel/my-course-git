// ******************************
// Numbers Pyramid - Exercise 20
// ******************************
function addSpaces(row, n) {
    for (let i = row; i < n; i++) {
        document.write(`&nbsp; &nbsp; `)
    }
}

function printAscendingNumbers(n) {
    for (let i = 1; i <= n; i++) {
        document.write(`${i} &nbsp;`)
    }
}

function printDescendingNumbers(n) {
    if (n > 1) {
       for (let i = n-1; i >= 1; i--) {
        document.write(`${i} &nbsp;`)
        }
    }
    document.write(`<br>`)
}

function printNumbersPyramid(n) {
    if (isNaN(n) || n < 1 || n > 20) {
        document.write(`Error - please enter a number between 1 - 20`);
        return;
    }
    for (let row = 1; row <= n; row++) {  
        addSpaces(row, n);
        printAscendingNumbers(row);
        printDescendingNumbers(row);
    }
}

printNumbersPyramid(+prompt(`Enter a positive number`));