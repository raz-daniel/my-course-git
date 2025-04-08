// function printMax(a, b) {
//     console.log(a > b ? a : b)
// }

// function randomNumber(min, max) {
//     return parseInt(Math.random() * (max - min) + min)
// }

// printMax(4, 9)
// printMax(randomNumber(0, 100), randomNumber(0, 100)) // remember this line

// const num1 = +prompt('enter a number')
// const num2 = +prompt('enter a number')

// printMax(num1, num2)

// function getAbs(num) {
//     // protect the function from invalid arguments
//     if (typeof num !== 'number') return


//     return num > 0 ? num : -num
// }

// console.log(getAbs) // reference a function without (), is reference to function
// console.log(getAbs(-3)) //proper invocation
// console.log(getAbs("ido")) // improper invocation

// exercise 7
// function isPrime(num){
//     console.log(`typeof ${num} is: ${typeof num}`)
//     if (typeof num !== `number`) return undefined

//     for(let i = 2; i < num; i++){
//         if (num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }


// let num = +prompt("please enter a number");
// console.log(`number ${num} is prime? :${isPrime(num)}`);


// exervise 8
function getReversed(string){
    let reversedString = ""
    for(let i = string.length-1; i>= 0; i--){
        reversedString += string[i];
    }
    return reversedString
}

function isPalindrom(string, reversedString){
    return string === reversedString
}

const string = prompt("please enter a string");
console.log(getReversed(string))

console.log(isPalindrom(string, getReversed(string)))

console.log(isPalindrom(string, getReversed(string)) ? `the string ${string} is palindrom`: `this string ${string} is NOT palindrom`)
