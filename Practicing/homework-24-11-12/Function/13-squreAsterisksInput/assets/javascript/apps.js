// ********************
// Function - Exercise 13
// ********************

function printRectangle(width, height) {
    if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
        return `Error: enter numbers only`;
    }

    const row = `* &nbsp`.repeat(width);
    document.write(`${row}<br>`.repeat(height));
}

document.write(
    `First assignment: Hard-coded - Width: 20, Height: 5
    <br><br>
`);
printRectangle(20, 5);
document.write(`<hr>`);

document.write(`Second assignment: Random numbers<br><br>`);
function RandomNum(max = 30) {
    return Math.floor(Math.random() * max +1);
}
printRectangle(RandomNum(), RandomNum());
document.write(`<hr>`);

document.write(`Third assignment: User input<br><br>`);
printRectangle(+prompt(`Enter width`), +prompt(`Enter height`));
document.write(`<hr>`);