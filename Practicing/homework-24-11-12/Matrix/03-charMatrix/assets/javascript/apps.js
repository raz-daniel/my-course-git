// ********************
// Matrix - Exercise 03
// ********************

const products = [["Onion", "Carrot", "Tomato", "Cucumber"],["Apple", "Banana", "Peach", "Grapes", "Orange"],["Wheat", "Flour"]];
for (const row of products) {
    document.write (` | `);
    for (const cell of row) {
        document.write(`${cell} ${cell.length} | `);
    }
    document.write(`<br>`);
}

document.write(`<hr>`)
let longestProp = products[0][0];
let longestPropNum = longestProp.length-1;
for (const row of products) {
    for (const cell of row) {
        if (cell.length > longestPropNum) {
            longestProp = cell;
            longestPropNum = longestProp.length
        } else if (cell.length === longestProp.length) {
            longestProp += `, ${cell}`;
        } 
    }
}


let shortestProp = products[0][0];
let shortestPropNum = shortestProp.length+1;
for (const row of products) {
    for (const cell of row) {
        if (cell.length < shortestPropNum) {
            shortestProp = cell;
            shortestPropNum = shortestProp.length
        } else if (cell.length === shortestProp.length) {
            shortestProp += `, ${cell}`;
        } 
    }
}

document.write(`The Longest Property is: ${longestProp}<br><hr>`);
document.write(`The Shortest Property is: ${shortestProp}<br><hr>`);

