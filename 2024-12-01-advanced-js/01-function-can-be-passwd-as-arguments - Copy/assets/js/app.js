const name = `daniel`
const grade = 96
function showGrade(grade) {
    console.log(`grade is: ${grade}`)
    return true;
}

function showName(name) {
    console.log(`name is: ${name}`)
    return true;
}

function showFunction(someFunction) {
    console.log(`someFunction is ${someFunction}`)
    console.log(typeof someFunction)
    //making a variable a function and using it as function!
    someFunction(60)
}
showName(name)
showGrade(grade)

showFunction(showGrade)
//will run the function, make typeof someFunction a function (showGrade), and now running inside ShowGrade as 60...
