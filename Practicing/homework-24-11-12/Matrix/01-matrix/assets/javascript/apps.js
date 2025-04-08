// ********************
// Matrix - Exercise 01
// ********************

const matrix = [
    [12, 23, 34, 45],
    [56, 67, 78, 89],
    [10, 20, 30, 40]
]
console.log(`${matrix}`);
document.write(`1. Exercise Print the Matrix: ${matrix}<br>`);
document.write(`1. Exercise Print the Matrix Another Way!: <br>`);

let sumMatrix = 0;
let countMatrixCells = 0;
let max = null;
let min = matrix[0][0];
for (const row of matrix) {
    document.write(` | `);
    for (const cell of row) {
        document.write(`${cell} | `);
        sumMatrix += cell;
        countMatrixCells += 1;
        max = max < cell ? cell : max;
        min = min > cell ? cell : min;
    }
    document.write(`<br>`);
}
document.write(`<hr>`);

document.write(`2. Exercise - Sum the Matrix: the sum of ${matrix} is: ${sumMatrix}<hr>`);
document.write(`3. Exercise - Average the matrix: the average of the values is: ${sumMatrix/countMatrixCells}<hr>`);
document.write(`4. Exercise - Max Num is: ${max}<hr>`);
document.write(`5. Exercise - Min Num is: ${min}<hr>`);

for (const row of matrix) {
    document.write(` | `);
    for (const cell of row) {
        cell % 7 === 0 ? document.write(`${cell} | `) : document.write(`&copy | `);
    }
    document.write(`<br>`);

}