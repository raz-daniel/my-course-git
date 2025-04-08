function printArray(numbers) {
    let max = 0;
    for (const num of numbers) {
        max = num > max ? num : max;
    }
    document.write(`The Max Number in the Array ${numbers} is: ${max}<br>`);
}

const numArr = [1, 2, 3, 4, 5];

printArray(numArr);
printArray([10, 9, 8, 7, 6]);
