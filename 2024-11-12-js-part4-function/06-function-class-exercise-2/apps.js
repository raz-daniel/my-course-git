function printAsterisks(n) {
    for (let i=0; i < n ; i++) {
        document.write(`*&nbsp`);
    }
    document.write(`<br>`);
}

function printSquare(m) {
    for (let i=0; i < m; i++) {
            printAsterisks(m);
        }
    }

    printAsterisks(4);
    document.write(`<hr>`)
    printSquare(4);