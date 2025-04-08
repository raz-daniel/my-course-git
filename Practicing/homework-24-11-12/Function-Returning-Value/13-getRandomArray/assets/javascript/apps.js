// ***********************************************************
// * Function - Returning a value  - Exercise 13 (Challenge) *
// ***********************************************************
function isValidNum(num) {
    return (num.trim() !== "" && !isNaN(+num) && +num >= 1 );
}

function getRandomNum(min = 0, max = 100) {
    return Math.round(Math.random()*(min = 0, max = 100))+min;
}

function getRandomArray(arrayLength) {
    const randomArray = [];
    for (let i=0; i < +arrayLength; i++) {
        randomArray.push(getRandomNum());
    }
    return randomArray;
}

const repeat =3;
for (let i=1; i <= repeat; i++) {
    const arrayLength = prompt(`Task ${i} of ${repeat}: Enter array length`);
    document.write(`Task #${i} of ${repeat}:<br>`);

    document.write(`The Array Length is: `);

    if (isValidNum(arrayLength)) {
        document.write(`${arrayLength}<br>`)
        document.write(`The Array: [${getRandomArray(arrayLength)}]<hr>`);
    } else {
        document.write (`Error - Positive numbers only!<hr>`);
    }
}
