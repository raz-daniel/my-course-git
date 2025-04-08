function printMax(a, b) {
    console.log(a > b ? a : b)
}

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min)
}

printMax(4, 9)
printMax(randomNumber(0, 100), randomNumber(0, 100)) // remember this line

const num1 = +prompt('enter a number')
const num2 = +prompt('enter a number')

printMax(num1, num2)


