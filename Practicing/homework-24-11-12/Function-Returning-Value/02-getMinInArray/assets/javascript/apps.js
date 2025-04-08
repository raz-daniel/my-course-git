// ******************************
// Returning Value - Exercise 02
// ******************************


function getRandomArray(arrayLength) {
    if (isNaN(arrayLength)) {
        return `Error - Input must be numbers only!`;
    }
    if (arrayLength < 1) {
        return `Error - Input must be positive numbers only!`;
    }
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        randomArray.push(Math.round(Math.random() * 20) + 10);
    }
    return randomArray;
}


function getMin(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return `Error - Input must be a non-empty array!`
        // for (const num of numbers) {
        //     if (num < min) {
        //         min = num;
        //     }
        // }
        // return min;
    }
    return Math.min(...numbers);
}


for (let i = 1; i <= 3; i++) {
    const arrayLength = +prompt(`Test #${i}: Enter array's length`);
    const randomArray = getRandomArray(arrayLength);
    if (typeof randomArray === `string`) {
        document.write(`${randomArray}<hr>`);
        continue;
    }
    document.write(`Test #${i}:<br>`);
    document.write(`Generated Array: [${randomArray}]<br>`);
    document.write(`The Min Number is: ${getMin(randomArray)} <hr>`)
}