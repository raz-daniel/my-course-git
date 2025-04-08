function getAbsoluteNum(num) {
    return num > 0 ? num : (num * -1);
}

const num = -10;
console.log(`The Absolute Num of ${num} is: ${getAbsoluteNum(num)}`);