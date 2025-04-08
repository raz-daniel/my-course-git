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
    }
]

const jsonString = JSON.stringify(students);
document.write(jsonString);
document.write(`<hr>`);

console.log(students);
console.log(jsonString);

const friendsFromInstergram = `[{"firstName":"Adir","familyName":"Raz","grades":[92,90,88]},{"firstName":"Ilan","familyName":"Segev","grades":[94,95,96]},{"firstName":"Ofir","familyName":"Schwartz","grades":[98,99,100]}]`

const friends = JSON.parse(friendsFromInstergram);
console.log(friends)