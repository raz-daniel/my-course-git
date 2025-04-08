const arrayOfNumber = [];
for (let i=0; i < 20; i++) {
    arrayOfNumber.push(Math.ceil(Math.random()*100));
}

// arrayOfNumber.forEach(number => {
//     console.log(`${number}`)
// })

const firstEvenNum = arrayOfNumber.find(number => number % 2 === 0);
console.log(`First Even Num is: `, firstEvenNum)

const firstNumBigger30 = arrayOfNumber.find(number => number > 30);
console.log(`First Bigger than 30 Num: `, firstNumBigger30)

const odds = arrayOfNumber.filter(number => number % 2 !== 0)
console.log(odds);

const higherThan50 = arrayOfNumber.filter(number => number > 50);
console.log(higherThan50
)

const index = arrayOfNumber.findIndex(number => number > 50)
console.log(index)

arrayOfNumber.forEach(number => console.log(number % 2 === 0 ? `Even` : `Odd`))

console.log(arrayOfNumber.reduce((max, currentNum) => currentNum > max ? currentNum : max,0))

console.log(arrayOfNumber.reduce((min, currentNum) => min < currentNum ? min : currentNum, Infinity));
