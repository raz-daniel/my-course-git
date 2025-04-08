// historic way of using variables
var companyName = 'KSP';

// document.write --> is like telling him to put him in the body
document.write(companyName);
// Using \n in document.write wont work for us
// document.write("\n");
document.write("<br>");
document.write(companyName);

alert(companyName + "\n" + companyName);
console.log(companyName + "\n" + companyName);

// KSP is a great company, everybody likes KSP, KSP have the best products.
document.write("KSP is a great company, everybody likes KSP, KSP have the best products.");
document.write("<br>" + companyName + " is a great company, everybody likes " + companyName + ", " + companyName + " have the best products.");
document.write("<br>" + 'it is same like "" ');
document.write("<br>" + 'i can also use ` - it help me go down a line and also interpulation!');
document.write(`<br>${companyName} is a great company, everybody likes ${companyName}, ${companyName} have the best products.`);


let greeting = "hello";
let name = "daniel";
console.log(greeting);
console.log(greeting + ", " + name + "!");
document.write(`<br>${greeting}, ${name}!`);

