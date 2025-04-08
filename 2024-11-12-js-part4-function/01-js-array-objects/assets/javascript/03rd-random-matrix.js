// let's create a random matrix. 5X5
const matrix = [];
for (let rowCount=0; rowCount < 5; rowCount++) {
    const row = [];
    for (let colCount=0; colCount <5; colCount++) {
        const randomNumber = parseInt(Math.random() * 100);
        row.push(randomNumber);
    }
    matrix.push(row);
}
console.log(matrix);

let max = 0;
let maxRow;
let maxCol;
for (let row =0; row < matrix.length; row++) {
    for (let col=0; col < matrix[row].length; col++) {
        if (matrix[row][col] > max) {
            max = matrix[row][col];
            maxRow = row;
            maxCol = col;

        }
    }
}
console.log(`The Max value ${max} location at (${maxRow},${maxCol})`);

//find the coordinates of the max value of the matrix