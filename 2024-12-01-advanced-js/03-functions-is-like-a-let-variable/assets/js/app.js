const name = `daniel`
const grade = 96

function showGrade(grade) {
    console.log(`grade is: ${grade}`)
    return true;
}

console.log(showGrade)
console.log(typeof showGrade)

showGrade = 60
//function is a let variables!

console.log(showGrade)
console.log(typeof showGrade)
