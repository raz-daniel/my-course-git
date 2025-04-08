function printMax(num1, num2) {
    document.write(`The max number is: ${num1>num2 ? num1 : num2} <br>`);
}
printMax(22,50);


printMax(parseInt(Math.random() *100), parseInt(Math.random() *100));

let number1 = +prompt(`Enter a Number`);
let number2 = +prompt(`Enter another Number`);
printMax(number1, number2);
