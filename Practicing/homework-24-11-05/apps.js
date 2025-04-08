// ************************************************************************************
// ***************************************** HOMEWORK *********************************
// ************************************************************************************

// ************************************************************************************
// *************************************** Nested Loops *******************************
// ************************************************************************************

// *************************** EXERCISE 1: ********************************************
// number definition!
// let num;
// do { 
//     num = prompt(`PLease enter num:\n It will stop only when entering 0 or negative number!`); // Enter Num
//     // Check for validation
//     if (isNaN(num) /* check if its a number */ || num.trim() === "" /* check if there are empty spaces or nothing*/) {
//         document.write(`You enter Invalid number!. Please use digits only!<br><br>`) //showing a msg for invalid input.
//         num = 1; // taking care it wont go out of the loop
//         continue; //go back to the start for a new input.
//     }
//     num = +num; // make it from string to number
//     if (num > 0) { 
//         document.write(`The numbers from 1 to the number you printed ${num} are:`);
//         for (let i=1; i <= num; i++) {
//             document.write(`${i} `);
//         }
//         document.write(`<br><br>`);
//     }
// } while (num > 0);


// *************************** EXERCISE 11: ********************************************
// let num = prompt(`Please enter a number`);
// if (isNaN(num) || num.trim() === "") {
//     document.write(`Invalid Input!`);
// } else {
//     num = parseInt(num);
//     const numRows = num * 2 - 1;
//     let numCols = 1;
//     for (let i=1; i <= numRows; i++) {
//         for (let j=1; j <= numCols; j++) {
//             document.write(`${j} `);
//         }
//         i < num ? numCols++ : numCols--;
//         document.write(`<br>`);
//     }
// }

// *************************** EXERCISE 12: ********************************************
// let num = prompt(`Please enter a number`);
// if (isNaN(num) || num.trim() === "") {
//     document.write(`Invalid Input!`);
// } else {
//     num = parseInt(num);
//     const numRows = num % 2 === 0 ? num+1 : num;
//     let numCols = 1;
//     for (let i=1; i <= numRows; i++) {
//         for (let j=1; j <= numCols; j++) {
//             document.write(`${j} `);
//         }
//         i < num / 2 ? numCols+=2 : numCols-=2;
//         document.write(`<br>`);
//     }
// }


// *************************** EXERCISE 13 ********************************************
// const height = +prompt(`enter the height of rectangle:`);
// const width = +prompt(`enter the width of rectangle:`);
// for (let row = 1; row <= height; row++) {
//     for (let col = 1; col <= width; col++) {
//         const isFirstOrLastRow = row === 1 || row === height;
//         const isFirstOrLastCol = col === 1 || col === width;
//         const iterationOutput = isFirstOrLastRow || isFirstOrLastCol ? "*" : `&nbsp;&nbsp;`;
//         document.write(iterationOutput);
//     }
//     document.write(`<br>`);
// }


// *************************** EXERCISE 16: ********************************************
// let num = prompt(`Please enter a number! \nYou are welcome to try otherwise... WONT WORK!`)
// while (isNaN(num) || num.trim() == "") {
//     alert(`I Told you numbers only!!!`);
//     num = prompt(`Please enter a number! \nYou are welcome to try otherwise... WONT WORK!`)
// }
// num =+num;
// maxWidth = num * 2 - 1;
// for (let i=1; i <= num; i++) {

//     for (let space=1; space <= num-i; space++) {
//         document.write(`&nbsp;&nbsp;&nbsp;&nbsp;`)
//     };

//     for (let j=1; j <= i; j++) {
//         j <= 9 ? document.write(`${j}&nbsp;&nbsp;`) : document.write(`${j}`);
//     }

//     for (let j= i-1; j >= 1; j--) {
//         j <= 9 ? document.write(`${j}&nbsp;&nbsp;`) : document.write(`${j}`);
//     }

//     document.write(`<br>`);
// }


// ************************************************************************************
//  ***************************************** Objects ********************************
// ************************************************************************************


// *************************** EXERCISE 1: ********************************************
// const rectangle = {
//     width: 150,
//     height: 100,
//     color: `blue`,
//     intersectionX: 42.5,
//     intersectionY: 15,
// }
// document.write(`${rectangle.width} <br>`);
// document.write(`${rectangle.height} <br>`);
// document.write(`${rectangle.color} <br>`);
// document.write(`${rectangle.intersectionX} <br>`);
// document.write(`${rectangle.intersectionY} <br>`);
// document.write(`<br>`);

// for (const key in rectangle) {
//     document.write(`${key}: ${rectangle[key]}<br>`);
// }

// *************************** EXERCISE 2: ********************************************
// const employee = {
//     firstName: `Daniel`,
//     lastName: `Raz`,
//     Salary: 16000,
//     Email: `raz.daniel@gmail.com`,
//     Phone: `0586868282`,
// };
// for (const details in employee) {
//     document.write(`${details}: ${employee[details]} <br>`);
// };
// employee.status = `Marriage`;
// document.write(`${employee.status}<br>`);
// for (const details in employee) {
//     document.write(`${details}: ${employee[details]} <br>`);
// }

// *************************** EXERCISE 3: ********************************************
// *************************** EXERCISE 4: ********************************************
// *************************** EXERCISE 5: ********************************************
// const customer = {
//     firstName: `Daniel`,
//     lastName: `Raz`,
//     email: `raz.daniel@gmail.com`,
//     phone: `058-6868282`,
//     card: {
//         typeOfCard: `Master Card`,
//         cardNumber: `4580-0254-5384-8796`,
//         expirationDate: `06/05`,
//         securityNum: `156`,
//     }
// }
// document.write(`first name: ${customer.firstName}<br>`);
// document.write(`family name: ${customer.lastName}<br>`);
// document.write(`email number: ${customer.email}<br>`);
// document.write(`phone number: ${customer.phone}<br>`);
// document.write(`credit card type: ${customer.card.typeOfCard}<br>`);
// document.write(`card number: ${customer.card.cardNumber}<br>`);
// document.write(`expiration date: ${customer.card.expirationDate}<br>`);
// document.write(`security number: ${customer.card.securityNum}<br>`);
// document.write(`<br>`)

// for (const key in customer) {
//     if (typeof customer[key] === `object`) {
//         document.write(`${key}:<br>`)
//         for (const items in customer[key]) {
//             document.write(`&nbsp;&nbsp;&nbsp;&nbsp;${items}: ${customer[key][items]}<br>`);
//         }
//     } else {
//         document.write(`${key}: ${customer[key]} <br>`);
//     }
// }




// ************************************************************************************
//  ***************************************** Arrays ********************************
// ************************************************************************************


// *************************** EXERCISE 1: ********************************************
// const names = [`daniel`, `schwartz`, `yatziv`, `riko`, `lior`]
// document.write(`First Name in the Array: ${names[0]}<br>`);
// document.write(`Last Name in the Array: ${names[4]}<br><br>`);
// for (const singleName of names) {
//     document.write(`${singleName}<br>`);
// }
// document.write(`<br><br>`);
// names.splice(2,1);
// for (const singleName of names) {
//     document.write(`${singleName}<br>`);
// }
// document.write(`<br><br>`);
// names.splice(2,0,`Ar<br>ik`)
// for (const singleName of names) {
//     document.write(`${singleName}<br>`);
// }

// *************************** EXERCISE 2: ********************************************
// *************************** EXERCISE 3: ********************************************
// let grades = [];
// for (let i=1; i <= 10; i++) {
//     let grade = prompt(`Enter grade for student ${i}: \nNumber only between 0 to 100!`);
//     while (isNaN(grade) || grade.trim() === "" || +grade < 0 || +grade > 100) {
//         alert(`!!! --- INVALID  GRADE --- !!!`);
//         grade = prompt(`Enter grade for student ${i}: \nNumber only between 0 to 100!`);
//     }
//     grades.push(+grade);
// }
// document.write(`The Grades Are: ${grades} <br>`);
// for (const grade of grades) {
//     if (grade < 60) {
//         document.write(`Fail: ${grade}<br>`);
//     }
// }
// *************************** EXERCISE 4: ********************************************
// let numbers = [];
// for (let i=0; i < 10; i++) {
//     let num = parseInt(Math.random()*100)+1;
//     numbers.push(num);
// }
// document.write(`Printing 10 Random Numbers between 1-100 included!<br>`)
// for (const num of numbers) {
//     document.write(`&nbsp;${num}&nbsp;|`)
// }
// document.write(`<br>`)
// document.write(`Printing them in reverse! <br>`)
// numbers.reverse();
// for (const num of numbers) {
//     document.write(`&nbsp;${num}&nbsp;|`)
// }
// document.write(`<br>`)
// document.write(`Printing them in another reverse, different method - numbers.lengh <br>`)
// for (let i=numbers.length -1 ; i >= 0; i--) {
//     document.write(`&nbsp;${numbers[i]}&nbsp;|`)
// }
// document.write(`<br>`)
// document.write(`next exercise - sum them and print the outcome <br>`)
// let sum =0;
// for (let i=0 ; i < numbers.length ; i++) {
//     sum+= numbers[i];
// }
// document.write(`And the Total Sum Is: ${sum}<br>`);
// document.write(`next exercise - Average! so the average is: ${sum/numbers.length}  <br>`);
// document.write(`next exercise - Present the even numbers. <br>`);
// document.write(`So the even numbers are: `);
// let countOdd = 0;
// for (const num of numbers) {
//     num % 2 === 0 ? document.write(`${num} | `) : countOdd++;
// }
// document.write(`<br>next exercise - Present the count of odd numbers - the answers is: ${countOdd}<br>`);
// document.write(`next exercise - Max Number! using ... so the max number is: ${Math.max(...numbers)} <br>`);
// document.write(`next exercise - Min Number! using ... so the Min number is: ${Math.min(...numbers)} <br>`);
// let average = sum / numbers.length;
// let countBelowAverage = 0;
// document.write(`next exercise - Present all the numbers who are above average: `);
// for (const num of numbers) {
//     num > average ? document.write(` ${num} |`) : countBelowAverage++;
// }
// document.write(`<br> and not the amount of numbers who are belov average: ${countBelowAverage}<br> Finished!!!!`);

