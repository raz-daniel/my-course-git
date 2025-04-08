// alert(`hello`);
// document.write(`Hello`);
// console.log(`Hey`)
// let, const, var
// prompt, while, ternary (?:;), if, if else
// ++, +=, **

//Variables: 

// Exercise 1:
// const num = +prompt(`Please Enter a Number`);
// isNaN(num) ? document.write(`Please Enter a valid number!`) : document.write(`The Pow of the Number you wrote is: ${num**2}`);

//Exercise 2:
// const num1 = +prompt(`Please add a number:`);
// const num2 = +prompt(`Please add another number:`);
// const num3 = +prompt(`Please add one more number:
// Last one I promise.`);
// !isNaN(num1) && !isNaN(num2) && !isNaN(num3) ? document.write(num1*num2*num3) : document.write(`Not a valid number!`);

//Exercise 3:
// const num1 = +prompt(`Please add a number`);
// if (isNaN(num1)) {
//     document.write(`Please add a valid Number!`);
// } else {
//     const num2 = +prompt(`Please add another number`);
//     if (isNaN(num2)) {
//         document.write(`Your second number isn't valid!`);
//     } else {
//         document.write (`First Num ${num1} divide Second Num ${num2} is: ${num1/num2}`);
//         document.write (`<br>Second Num ${num2} divide First Num ${num1} is: ${num2/num1}`);
//     }
// } 

// Exercise 4:
// const firstName = prompt(`Please write your first name:`);
// const lastName = prompt(`Please write your last name:`);
// const email = prompt(`Please write your email address:`);
// const phone = prompt(`Please write your phone number:`);
// alert(`First name: ${firstName} \n Last name: ${lastName} \n Email: ${email} \n Phone: ${phone}`);

//Exercise 5:
// const firstName = prompt(`Please enter your first name:`);
// if (!firstName) {
//     document.write(`Invalid first name!`);
// } else {
//     const lastName = prompt(`Please enter your last name:`);
//     if (!lastName) {
//         document.write(`Invalid last name!`);
//     } else {
//         const email = prompt(`Please enter your email:`);
//         if ((!email.includes(`@`)) || (!email.includes(`.`))) {
//             document.write(`Email is not Valid!`);
//         } else {
//             const phone = prompt(`Please enter your phone:`);
//             if (!/^[\d-]+$/.test(phone)) {
//                 document.write(`Invalid phone number!!`)
//             } else {
//                 alert(`Full name: ${firstName} ${lastName}\nEmail: ${email}, Phone: ${phone}`);
//             }
//         }
//     }
// }

// Exercise 6:
// const number = +prompt(`Please enter a number`);
// if (isNaN(number)) {
//     document.write(`Invalid Input! Please write a Number!`);
// } else {
//     document.write(`the right digit is: ${number % 10}`);
// }

// Exercise 7:
// const num1 = +prompt(`Please enter num:`);
// if (isNaN(num1)) {
//     document.write(`Invalid number!`);
// } else {
//     const num2 = +prompt(`Please enter another num:`);
//     if (isNaN(num2)) {
//         document.write(`second number is invalid!`);
//     } else {
//         const num3 = +prompt(`Almost done, please enter another num:`);
//         if (isNaN(num3)) {
//             document.write(`third number is invalid!`);
//         } else {
//             const num4 = +prompt(`Last time, please enter num:`);
//             if (isNaN(num4)) {
//                 document.write(`third number is invalid!`);
//             } else {
//                 document.write(`the sum of all numbers is: ${num1+num2+num3+num4}`);
//             }
//         }
//     }
// }

// *****************************
// Exericse 8+9 !!!! NEED TO DO
// *****************************
//      PART 2 - Conditions
// *****************************

// Exercise 01
// const num1 = +prompt(`Enter first num:`);
// const num2 = +prompt(`Enter second num:`);
// num1 > num2 ? document.write(`The biggest number is ${num1}.`)
//     : num2 > num1 ? document.write(`The biggest number is ${num2}`)
//     :  document.write(`The Numbers are equal ${num2}`);

// Exercise 02


// Exercise 03


// Exercise 04


// Exercise 05


// Exercise 06


// Exercise 07

// *****************************
//      PART 3 - Loops
// *****************************

// Exercise 01
// let i = 1;
// while (i <= 1000) {
//     document.write(`${i} `);
//     i++;
// }

//Exercise 6:
// for (let i = 999; i >= 1; i -= 2) {
//     document.write(`${i} `);
//     if (i % 100 === 1) {
//         document.write(`<br>`);
//     }
// }

//Exercise 8:
// const num = +prompt(`Please enter a number:`);
// if (isNaN(num) || (num <= 0)) {
//     document.write(`Invalid number!`);
// } else {
//     for (let i = 1; i <= num; i++) {
//         i % 10 === 0 ? document.write(`${i}<br>`) : document.write(`${i} `);
//     }
//     document.write(`<br>`)
//     for (let j = num; j >= 1; j--) {
//         j % 10 === 0 ? document.write(`${j}<br>`) : document.write(`${j} `);
//     }
// }

// Exercise 23:
let number = 0;
let evenNumCount = 0;
let oddNumCount = 0;
while (true) {
    number = +prompt(`Exercise 23:\nEnter a number:\n To stop the exercise, write negative number!`);       
    if (number < 0) {
        break;
    }
    if (!isNaN(number)) {
        number % 2 === 0 ? evenNumCount++ : oddNumCount++;
        document.write(`${number} `) 
    }
} 
document.write(`<br>The count of even numbers is: ${evenNumCount}.<br>The count of odd numbers is: ${oddNumCount}.`);

// Exercise 24:
// const num = prompt(`Please enter a number:`);
// let editNum = +num;
// let sumDigit = 0;
// if (isNaN(num) || num === ``) {
//     document.write(`Invalid input!`);
// } else {
//     if (editNum < 0 ) { editNum = editNum * (-1)};
//     while (editNum >= 1) {
//         sumDigit = sumDigit + (editNum % 10);
//         editNum = parseInt(editNum / 10);
//     }
//     document.write(`The total sum of the digit for the number you wrote ${num} is: ${sumDigit}`);
// }

//Exercise 25:
// const num = prompt(`Please enter a number:`);
// let editNum = +num;
// let countDigit = 0;
// if (isNaN(num) || num === ``) {
//     document.write(`Invalid number!`);
// } else {
//     if (editNum < 0) { editNum = editNum * (-1)};
//     while (editNum >= 1) {
//         countDigit ++;
//         editNum = editNum / 10;
//     }
//     document.write(`The number of digit in the number you wrote (${num}) is: ${countDigit}`);
// }
