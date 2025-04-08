// *****************************
// Empty Rectangle - Exercise 15
// *****************************

function printFullAsterisksRow(fullRow) {
    for (let i = 0 ; i < fullRow; i++) {
        document.write(`* &nbsp;`);
    }
    document.write(`<br>`);
}

function printHollowAsterisksRow(hollowRow) {
    for (let i = 0; i < hollowRow; i++) {
        if (i === 0 || i === hollowRow - 1) {
            document.write(`* &nbsp;`);
        } else {
            document.write(`&nbsp;&nbsp;&nbsp;&nbsp;`);
        }

    }
    document.write(`<br>`);
}

function printHollowRectangleOfAsterisks(height, width) { 
   if (isNaN(height) || isNaN(width) || height < 1 || width < 1) {
        document.write(`Error - positive integer numbers only!`);
        return;
    }
    
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            printFullAsterisksRow(width);
        } else {
            printHollowAsterisksRow(width);
        }
    }
}

printHollowRectangleOfAsterisks(5,10);
document.write(`<hr>`)

function printRandomNumber() {
    return parseInt(Math.random()*30+2);
}

printHollowRectangleOfAsterisks(printRandomNumber(), printRandomNumber());
document.write(`<hr>`)

printHollowRectangleOfAsterisks(+prompt(`Enter a positive integer number`), +prompt(`Enter a positive integer number`));
document.write(`<hr>`)