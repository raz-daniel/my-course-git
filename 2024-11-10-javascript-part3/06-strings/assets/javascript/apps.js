const message = `hello world` //[`h`,è`,`l`,`l`,ò`,``,`w`.....]
console.log(message)

// I can see the character at offset 0 
console.log(message[0]) //will give h (hello world.)

// with strings, I can't modify singular characters
message[0] = `l`;
console.log(message) //will stay h and not l

console.log(message.toUpperCase())

const upperCaseMessage = `HI, HOW ARE YOU?`
console.log(upperCaseMessage.toLowerCase());
console.log(upperCaseMessage.toLowerCase); //Not Working because its f (Function)

console.log(message.includes(`hello`))

const text = `hello world`
console.log(text.includes(`hello`)) //True
console.log(text.includes(`Hello`)) //False - Capital Letter in Hello
//meaning, HELLO !== hello

console.log(text.startsWith(`hello`)) //True
console.log(text.endsWith(`hello`)) //True

const anotherMessage = `  hello     `
console.log(anotherMessage.length)
console.log(anotherMessage.trim().length);
//trim removies blank space from the beginning and the end but not in the middle!
console.log(anotherMessage.trim());
console.log(message.indexOf(`o w`));
console.log(message.lastIndexOf(`l`));

const longMessage = `Welcome to Jamaica man, we can have a lot of fun`;
console.log(longMessage.substring(11, 18))
console.log(longMessage.substring(0, 18))

let start = longMessage.indexOf(`Jamaica`);
// let end = longMessage.indexOf(` man, we`)
let end = longMessage.indexOf(` `,start)
console.log(longMessage.substring(start, end)) // => Jamaica

