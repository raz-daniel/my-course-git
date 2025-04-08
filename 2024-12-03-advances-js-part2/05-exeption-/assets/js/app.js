// ********************************
// ********************************
//          exception handling
// ********************************
// ********************************


const numberOfDigits = +prompt(`enter number of digits`);
console.log(`hello1`)
try {

    const pi = Math.PI.toFixed(numberOfDigits)
    console.log(pi)

} catch (e) {
    console.log(e)
    
    console.log(typeof e)
    
    alert(`Enter number between 0-100`)
} finally {
    console.log(`dealt with toFixed for better and worse`)
}

console.log(`hello2`)

