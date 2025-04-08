// const fixNum = (num, numberOfDigits) => num.toFixed(numberOfDigits)

// const work = () => {
//     const numberOfDigits = +prompt(`enter number of digits`);

//     console.log(`hello1`)

//     const pi = Math.PI.toFixed(numberOfDigits)
//     console.log(pi)
// }

// work()

// const code = `const x=1; const y=2; alert(x+y)`;
// eval(code)


const newHTML= prompt(`Enter JS Code`);
try {
    eval(newHTML)
} catch (error) {
    alert(`wrong`)
} finally {

}

document.body.innerHTML = newHTML;