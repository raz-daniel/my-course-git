function printPower2(num, powerFunc) {
    if (typeof powerFunc !== `function`) return
    console.log(powerFunc(num))
}

printPower2(3, (num) => { return num ** 2 }) //arrow function =>

//arrow functions styles:
//the goal is - less code as possible!

const sum = (a, b) => {
    const result= a + b
    console.log(result)
    return result
} // that way we make a function const!


const power4 = num => {
    const result = num ** 4
    console.log(result)
    return result
}


const powerX = (num,x) => console.log(num ** x)

const printPower2 = num => console.log(num ** 2)

//many arguments, two lines of code of which  one is return.
const getPower2 = num => num ** 2

//shortest way for easy function!
// heaving function, variable, two line code when one is return

//inline anonymous arrow function








