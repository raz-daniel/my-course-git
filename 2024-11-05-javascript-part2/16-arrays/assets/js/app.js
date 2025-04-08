// ****************************************************************************************
// ********************************************* arrays ***********************************
// ****************************************************************************************

// -------------------------  IMPORTANT - BASIC RULES --------------------------------------

// const grades = [97, 66 ,73 ,88 ,55 ,78];
// //       i       0   1   2   3   4   5
// document.write(`The Grades are: ${grades}<br>`);
// document.write(`The First Grade in the string is:${grades[0]}<br>`);
// grades[0] += 3 //now the first grade in the string is 100.
// document.write(`The New Grade in the First string is: ${grades[0]}<br>`);
// //add value to array
// grades.push(99);
// document.write(`We've added grade to the string: ${grades[6]}<br>`);
// document.write(`The updated Grades are: ${grades}<br>`);
// //print the lenght of the array
// document.write(`The length of the array is: ${grades.length}<br>`);
// //delete places 4 from array (remove item)
// grades.splice(4,1);
// document.write(`The updated Grades after deleted i=4 (5th grade) are: ${grades}<br>`);

// ----------------------------------  THE END! --------------------------------------------



// *************************************************************************************
// ***************************** Exercise 10! *******************************************

// const grades = [10, 20, 30, 40, 50, 60, 70, 80];
// for (let i=0; i <= grades.length-1; i++) {
//     document.write(`The ${i+1} grade is: ${grades[i]} and it is places in the ${i} place on the array. <br>`);
// }

// ************* For Of Loop ****************************
// for (const i of grades) {
//     document.write(`the grade is: ${i}<br>`);    
//     }
// document.write(`the grades are: ${grades}<br>`);    


// *************************************************************************************
// ***************************** Exercise 11! ******************************************

// 1st section
let grades = [];
for (let i=1; i <= 12; i++) {
    grades.push(parseInt(Math.random()*100));
}
document.write(`${grades[0]}<br>`);
document.write(`${grades[4]}<br>`);
for (const grade of grades) {
    document.write(`the number is: ${grade}<br>`);
}
grades[1] -= 5;
document.write(`The Grades are: ${grades}<br>`);
let sum =0;
for (const grade of grades) {
    sum += grade;
}
document.write(`The Average is: ${Math.round(sum/grades.length)}<br>`);
document.write(`The Average is: ${(sum/grades.length).toFixed(2)}<br>`);
let max =0;
for (const grade of grades) {
    max = grade > max ? grade: max;
}
document.write(`The Max Grade is: ${max}<br>`);



// ********************* 7 BOOM *****************
// ********************* 7 BOOM *****************
// ********************* 7 BOOM *****************
// For 7 Boom
// const numericString = "8765"
// numericString.split(``)
// ********************* 7 BOOM *****************
// ********************* 7 BOOM *****************
// ********************* 7 BOOM *****************