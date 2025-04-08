// *****************      Strings        *********************
// ************** Homework! Exercise 01  *********************

// ************************ 01 ********************************
/*
let site;
do {
    site = prompt(`Please enter a website`).trim();
} while (site === `` || !/^[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/.test(site));
let siteEnd = site.slice(site.lastIndexOf(`.`));
if (siteEnd === `.il`) {
    const previousDot = site.slice(0, site.lastIndexOf(`.`)).lastIndexOf(`.`)
    siteEnd = site.slice(previousDot);
};
console.log(`The TLD for this site is: ${siteEnd}`);
switch (siteEnd) {
    case `.com`:
        console.log(`This is an International Commercial Website: ${siteEnd}`);
        break;
    case `.org`:
        console.log(`This is an International Organization Website: ${siteEnd}`);
        break;
    case `.co.il`:
        console.log(`This is an Israeli Commercial Website: ${siteEnd}`);
        break;
    case `.org.il`:
        console.log(`This is an Israeli Organization Website: ${siteEnd}`);
        break;
    case `.gov.il`:
        console.log(`This is an Israeli government Website: ${siteEnd}`);
        break;
    default:
        console.log(`${siteEnd} - LTD is NOT recognized (.com / .co.il / .org / .org.il / .gov`);
}
*/


//************************ 02 ********************************
//get file with extension and check for isImage?
/*
const imageFile = prompt(`Please enter a name of file including the file extension:
    pictures.jpg    stories.doc etc...`).toLowerCase();
const fileExtension = imageFile.slice(imageFile.lastIndexOf(`.`));
console.log(fileExtension);
const imageTypes = [`.jpg`, `.jpeg`, `.png`, `.gif`, `.tiff`, `.bmp`, `.webp`];
const isImage = imageTypes.includes(fileExtension);
isImage ? console.log(`This is an Image File!`) : console.log(`This is NOT an Image File!`) ;
*/


//************************ 03 ********************************
/*
const phoneNum = prompt(`Enter phone number:
    Please type digits only`).trim();
(phoneNum.slice(0,2) === `05` && phoneNum.length === 10 && !isNaN(phoneNum)) ?
 console.log(`Valid Phone Number!`) : console.log(`INVALID Phone Number!`) ;
*/

// Claude Suggestion with my fixation!
//  const phoneNum = prompt(`Enter phone number:
//     Please type digits only`).trim();

// let errorMessage = "";

// if (!phoneNum.startsWith("05")) {
//     errorMessage += "Phone number must start with 05\n";
// }
// if (phoneNum.length !== 10) {
//     errorMessage += "Phone number must be exactly 10 digits\n";
// }
// if (isNaN(phoneNum)) {
//     errorMessage += "Phone number must contain only digits\n";
// }

// console.log(errorMessage === "" ? "Valid Phone Number!" : errorMessage);

//************************ 04 ********************************
// Input Strong Pass (6 Char+, Capital, Non Capital, Digit, Tav) Write if Strong and why not...

/*
const pass = prompt(`Please enter password. Strong password must contain: \nCapital Letter [A-Z], \nNon Capital Letter[a-z], \nDigit [0-9], \nSign, \nMin 6 Characters`);
let errormsg = `Weak Password: `;
if (!/[0-9]/.test(pass)) {
    errormsg += `Add at least one digit 0-9.\n `;
}
if (pass.length < 6) {
    errormsg += `Set minimum of 6 characters.\n `
}
if (!/[A-Z]/.test(pass)) {
        errormsg += `Add at least one capital letter.\n `
}
if (!/[a-z]/.test(pass)) {
    errormsg += `Add at least one lower letter.\n `
}
if (!/[~`!@#$%^&*()_+={}[]|\/"':;?<>-]/.test(pass)) {
    errormsg += `Add at least one special letter (sign).\n `
}
if (pass.includes(` `)) {
    errormsg += `Spaces are not allowed!.\n `
}
console.log(errormsg === `Weak Password: ` ? `Your Password is Strong` : `${errormsg}`);
*/