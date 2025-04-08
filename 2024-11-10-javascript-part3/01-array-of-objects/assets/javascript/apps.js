// *************************************************************************************
// *************************************************************************************
// Beginning - Array Search!


// const randomNumbers = []; // Create an EMPTY array
// const maxNum = 100;
// const minNum = -100;
// for (let i = 1; i <= 100; i++) {
//     randomNumbers.push(parseInt(Math.random() * (maxNum - minNum)) + minNum) // Add to array Rand num between -100 - 100
// }
// alert(randomNumbers)
// const guess = +prompt(`Guess a Number in the array:`);
// let isBingo = false;
// for (const randomNumber of randomNumbers) {
//     if (randomNumber === guess) {
//         isBingo = true;
//     }
// }
// alert(isBingo? `Bingo` : `No Bingo`);


// *************************************************************************************
// *************************************************************************************
// ****   *****  SUPER IMPORTANT!    **** ****   ARRAY   OF  OBJECTS **** ****
// *************************************************************************************
// *************************************************************************************

// const mira = {
//     name: `Mira`,
//     age: 22,
//     gender: `female`,
//     city: `Petach Tiqwa`
// }

// const yoav = {
//     name: `Yoav`,
//     gender: 22,
//     gander: `male`,
//     city: `Herzliya`
// }

// const beery = {
//     name: `Beery`,
//     age: 18,
//     gender: `male`,
//     city: `Holon`
// }

// const osher = {
//     name: `Osher`,
//     age: 22,
//     gender: `male`,
//     city: `Givat Shmuel`
// }

// const grades = [100, 96, 55];
// const animals = [`dog`, `cat`];
// const friends = [mira, yoav, beery, osher];

// for (const friend of friends) {
//     document.write(` ${friend.name} is my friend <br>`);
// }

//***************************   Objects in an Array ************************

// for (const friend of friends) {
//     console.log(`properties of ${friend.name}`);
//     for (const property in friend) {
//         console.log(`${property} value is ${friend[property]}`)
//         friends
//     }
// }
// for (const friend of friends) {
//     console.log(`${friend.name} is my friend!`);
// }
// friends.splice(1, 1); //remove YOAV!
// for (const friend of friends) {
//     console.log(`${friend.name} is my friend!`);
// }

// const musicBands = [
//     {
//         name: `Nirvana`,
//         style: `Rock`
//     },
//     {
//         name: `Beatle`,
//         style: `Rock`
//     },
//     {
//         name: `Mashina`,
//         style: `Israeli`
//     }
// ]
// console.log(`I have ${musicBands.length} bands`);

// *********************************************
// *                                           *
// *             Class Exercise!               *
// *                                           *
// *********************************************

const students = [
    {
        firstName: `Daniel`,
        familyName: `Raz`,
        grades: [92, 90, 88]
    },
    {
        firstName: `Noam`,
        familyName: `Segev`,
        grades: [94, 95, 96]
    },
    {
        firstName: `Ofir`,
        familyName: `Schwartz`,
        grades: [98, 99, 100]
    },
]
for (const student of students) {
    console.log(student);
}

for (const student of students) {
    let sumGrades = 0;
    for (const grade of student.grades) {
        sumGrades += grade;
    }
    console.log(`For ${student.firstName}, the average of grades is: ${sumGrades / student.grades.length}`);
}