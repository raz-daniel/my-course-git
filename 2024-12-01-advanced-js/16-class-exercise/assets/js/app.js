// ****************************************
// *****  Higher Order Function - HOF *****
// ****************************************
const students = [
    {
        name: `yoav`,
        grade: 95,
        age: 22
    },
    {
        name: `Beery`,
        grade: 96,
        age: 18
    },
    {
        name: `Itay`,
        grade: 65,
        age: 25
    }
]

// **********************
//       find item
// **********************

// old version
for (const student of students) {
    if (student.grade === 65) {
        console.log(`Find Item - loop Version:`, student)
        break
    }
}

//new version
const student = students.find(student => student.grade === 65)
console.log(`Find Item - HOF Version:`, student)



// **********************
//      filter item
// **********************

//Old Version
const studentsWith90Plus = [];
for (const student of students) {
    if (student.grade > 90 && student.name.startsWith(`B`)) {
        studentsWith90Plus.push(student)
    }
}
console.log(`Filter Item - loop Version:`, studentsWith90Plus)

//new version
const filteredStudents = students.filter(student => student.grade > 90 && student.name.startsWith(`B`))
console.log(`Filter Item - HOF Version:`, filteredStudents)


// **********************
//      Index Search
// **********************

//Old Version
for (let i = 0; i < students.length; i++) {
    if (students[i].age === 25) {
        console.log(`Index Search - loop Version:`,i)
    }
}

//new version
const index = students.findIndex(student => student.age === 25)
console.log(`Index Search - HOF Version:`, index)

// **********************
//      Loop
// **********************

//old Version
for (const student of students) {
    console.log(`Just Loop - loop Version:`, student)
}

//new version
students.forEach(console.log) // apparently, forEach invokes the callback with 3 parameters: current, currentIndex, originalArray
students.forEach(student => console.log(`Just Loop - new Version:`, student))


// **********************
//      Convert Array
// **********************

//old version
const newArray = []
for (const student of students) {
    newArray.push(`
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        <tr>
        `)
}

// document.getElementById(`students`).innerHTML=newArray.join(``)

//new version
const anotherNewArray = students.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.age}</td>
        <tr>
        `)
// document.getElementById(`students2`).innerHTML=anotherNewArray.join(``)

//3 points bonus

const arrayWithBonus = students.map(student => `
    <tr>
        <td>${student.name}</td>
        <td>${student.grade+3}</td>
        <td>${student.age}</td>
    <tr>
    `)
// document.getElementById(`students3`).innerHTML=arrayWithBonus.join(``)

// *******************************************
//      Extract Single Value Out of an Array
// *******************************************

//old Version
let sum=0;
let avg=0;
for (const student of students) {
    sum+=student.grade
}
avg = sum / students.length
console.log(avg)

//new Version - HOF
const sum2 = students.reduce((cumulativeValue, student) => cumulativeValue + student.grade, 0)
const avg2 = sum2 / students.length
console.log(avg2)
































const newMax = students.reduce((currentMax, student) => student.grade > currentMax ? student.grade : currentMax, 0)
console.log(newMax)
