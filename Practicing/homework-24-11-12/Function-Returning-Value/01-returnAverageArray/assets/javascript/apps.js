// *******************************************
// Function - Returning a value - Exercise 01
// *******************************************

function arrayAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        document.write(`Error - this is invalid or empty array!`);
        return;
    }
    let sum = 0;
    for (const num of numbers) {
        if (isNaN(num)) {
            document.write(`Error - array contains non-numeric values!`);
            return;
        }
        sum += num;
    }
    return (sum / numbers.length).toFixed(1);
}



const array1 = [1,2,3,4,5,6,7,8,9,10];
const array2 = [2,4,6,8,10,12,14,16];
const array3 = [10,20,30,40,50,60,70];
document.write(`the average of the array [${array1}] is: ${arrayAverage(array1)} <hr>`);
document.write(`the average of the array [${array2}] is: ${arrayAverage(array2)} <hr>`);
document.write(`the average of the array [${array3}] is: ${arrayAverage(array3)} <hr>`);

