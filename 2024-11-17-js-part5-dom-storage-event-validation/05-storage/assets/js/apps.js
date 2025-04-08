// ******************************
// ******** STORAGE *************
// ******************************

// 1. non persistent cookie - lives as long as the browser lives!
// *************************************
document.cookie = `theme=dark`
console.log(document.cookie)
// *************************************


// 2. persistent cookie - 
const expirationDate = new Date(); //create a new date object that represents now
// Now expirationDate is 2024-11-17 11:33
// I want expiration date to be 2025-11-17 11:33 - a year from now.
// calc the value of next year
const nextYear = expirationDate.getFullYear() +1; // 2024+1 = 2025
// set it into the new expirationDate
expirationDate.setFullYear(nextYear) // 2025-11-17 11:33
//a shorter version will be: 
// expirationDate.setFullYear(expirationDate.GetFullYear() + 1);

// set it into the cookie
document.cookie = `theme=dark; expires=${expirationDate}`;


// 3. sessionStorage - same as non persistent cookie, but modern and easier to control variables.
sessionStorage.setItem(`font`, `david`);
console.log(sessionStorage.getItem(`font`)); //easier to modify instead of the = sign.


// 4. LocalStorage - Persistent storage
localStorage.setItem(`font-size`, `36`)
console.log(localStorage.getItem(`font-size`))