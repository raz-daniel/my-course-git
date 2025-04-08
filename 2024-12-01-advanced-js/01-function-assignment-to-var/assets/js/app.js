const name = `daniel`
const grade = 96
function showGrade(grade) {
    console.log(`grade is: ${grade}`)
    return true;
}
console.log(typeof name)
console.log(typeof showGrade)


let someVariable;
// save someVariable as function!
someVariable=showGrade

console.log(typeof someVariable)
console.log(someVariable(grade))


