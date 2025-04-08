import ArrayOperation from "./ArrayOperation.js";
const arrayOfNum = [];
for (let i = 0; i < 10; i++) {
    arrayOfNum.push(Math.floor(Math.random() * 100));
}
console.log(arrayOfNum);
console.log(`${ArrayOperation.getSum(arrayOfNum)} - Sum`);
console.log(`${ArrayOperation.getAvg(arrayOfNum)} - Avg`);
console.log(`${ArrayOperation.getMax(arrayOfNum)} - Max`);
console.log(`${ArrayOperation.getMin(arrayOfNum)} - Min`);
