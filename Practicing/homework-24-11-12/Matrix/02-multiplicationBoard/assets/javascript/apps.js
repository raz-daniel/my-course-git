// ********************
// Matrix - Exercise 02
// ********************
let tempArrayRow = [];
let multiplicationBoard = [];
for (let i=1; i <= 10; i++) {
    tempArrayRow = []
    for (let j=1; j <= 10; j++) {
        tempArrayRow.push(i*j);
    }
    multiplicationBoard.push(tempArrayRow);
}

for (const row of multiplicationBoard) {
    for (const cell of row) {
        document.write(`${cell} | `);
    }
    document.write(`<br>`);
}