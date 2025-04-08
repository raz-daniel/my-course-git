const isOld = false;
if (isOld) {
    console.log(`ìs old is Not Falsy`)
} else {
    console.log(`ìs old is Falsy`)
}

const number = 1;
if (number) {
    console.log(`number=1 is Not Falsy`)
} else {
    console.log(`number=1 is Falsy`)
}

const number2 = 100;
if (number2) {
    console.log(`number=100 is Not Falsy`)
} else {
    console.log(`number=100 is Falsy`)
}

const number3 = 0;
if (number3) {
    console.log(`number=0 is Not Falsy`)
} else {
    console.log(`number=0 is Falsy`)
}

const name = `daniel`;
if (name) {
    console.log(`name is Not Falsy`)
} else {
    console.log(`name is Falsy`)
}

const name2 = ``;
if (name2) {
    console.log(`empty name is Not Falsy`)
} else {
    console.log(`empty name is Falsy`)
}

const space = ` `;
if (space) {
    console.log(`space is Not Falsy`)
} else {
    console.log(`space is Falsy`)
}

let age;
if (age) {
    console.log(`age undefined is Not Falsy`)
} else {
    console.log(`age undefined is Falsy`)
}

let address = null;
if (address) {
    console.log(`null is Not Falsy`)
} else {
    console.log(`null is Falsy`)
}


let student = {name: `daniel`, salary: null};
if (student.salary) {
    console.log(`null is Not Falsy`)
} else {
    console.log(`null is Falsy`)
}


let salary = parseInt(`fdsfds`);
console.log(`salary is: ${salary}`)
if (salary) {
    console.log(`NaN is Not Falsy`)
} else {
    console.log(`NaN is Falsy`)
}