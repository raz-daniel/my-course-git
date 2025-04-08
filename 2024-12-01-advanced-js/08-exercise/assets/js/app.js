//exercise 1 - no arguments, single command
function sayHello() {
    console.log(`hello`)
}

function doSomething(callback) {
    callback()
}

doSomething(sayHello)

// mission - write the something  as inline function, anonymous function, arrow function
//inline function
doSomething (function sayHello() {
    console.log(`hello`)
})

//anonymous
doSomething (function () {
    console.log(`hello`)
})

//arrow
doSomething (() => console.log(`hello`))


//exercise 2 - several arguments, single command
function sum (a,b,c) {
    console.log(a+b+c);
} 

function doSum(callback) {
    callback(10, 20, 30)
}

//mission - inline, anonymous, arrow
//inline
doSum (function sum (a,b,c) {
    console.log(a+b+c);
} )

//anonymouse
doSum (function (a,b,c) {
    console.log(a+b+c);
} )

//arrow
doSum ((a,b,c) => console.log(a+b+c))



//exercise 3 - several arguments, single command
function getPower2(num) {
    return num ** 2
}

function printPower2(callback) {
    console.log(callback(20))
}

printPower2(getPower2)

//inline
printPower2(function getPower2(num) {
    return num ** 2
})

//anonymous
printPower2(function (num) {
    return num ** 2
})

//arrow
printPower2(num => num ** 2)


//rewrite the following function to arrow functions:

// function divide(a,b) {
//     const result= a / b
//     return result
// }

const divide = (a, b) => a / b

console.logdivide(4, 2)
// function printIsOdd(num) {
//     if (num % 2 === 0) {
//         console.log(`even`)
//     } else {
//         console.log(`odd`)
//     }
// }

const printIsOdd = num => console.log(num % 2 === 0 ? `even` : `odd`)

printIsOdd(4)

// function isNegative(num) {
//     if (num <0) {
//         console.log(`negative!`)
//         return true
//     }
//     return false
// }

const isNegative = num =>  num < 0 ? console.log(`negative!`) : false ;

isNegative(-1)