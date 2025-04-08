// ***************************************
// Function Retuning A Value - Exercise 01
// ***************************************

function validNum(num) {
  if (num.trim() === "" && isNaN(+num) {
    return false
  }
  return true;
}


function getRandomInRange(min, max) {
    return Math.round(Math.random()*(max-min))+min;
}


for (let i = 1; i <= 3; i++) {
    let min = prompt(`Test #${i}: Enter min range`);
    let max = prompt(`Test #${i}: Enter max range`);
    document.write(`Test #${i}:<br>`);

    if (validNum(min) && validNum(max)) {
        min = +min;
        max = +max;
        if (min > max) {
            [min, max] = [max, min];
        }        
        document.write(`The range you chosen is: ${min} - ${max}<br>`);
        document.write(`The random num is: ${getRandomInRange(min,max)}<hr>`);
    } else {
        document.write (`Error - input is not a number!<hr>`);
    }
}
