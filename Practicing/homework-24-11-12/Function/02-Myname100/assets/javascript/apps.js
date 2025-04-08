// ********************
// Function - Exercise 02
// ********************

function printMyName(userName, repeats) {
    for (let i = 0; i < repeats; i++) {
        printMyName(`${userName}<br>`);
    }
}

const userName = prompt(`Enter your Name:`);
printMyName(userName, 100);

