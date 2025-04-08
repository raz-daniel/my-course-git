// let num = +prompt (`add number`);
// let sum = 0;
// while (num !== 0) {
//     sum += num;
//     num = +prompt (`add number`);
// }
// document.write(`sum is: ${sum}`);


let num;
let sum = 0;
let count = 0;
while (num !== 0) {
    num = +prompt (`add number`);
    sum += num;
    count++;
}
alert (`avarage is: ${sum/(count-1)}`);