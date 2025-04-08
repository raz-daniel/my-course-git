// ****************************************************************************************
// ************************* WORKING WITH RANDOM NUMBER ***********************************
// ****************************************************************************************

// -------------------------  IMPORTANT - BASIC RULES --------------------------------------
// const randomNumber = Math.random();    ************************ 1st Step - Generate a Random Number betweeb 0-1 (No Including 1)!
// const randomNumber100 = Math.random() * 100; ****************** 2nd Step - Defined the range in Numbers bigger than 1. (*100 for 1-99.9999)
// const randomNumberParsed = Math.round(randomNumber100); ******* 3rd Step - make it Integer
// const randomNumberHigher = parseInt(randomNumberParsed) + 300; * 4th Step - 
// ----------------------------------  THE END! --------------------------------------------

// document.write(randomNumber);
// document.write(`<br>`);
// document.write(randomNumber100);
// document.write(`<br>`);
// document.write(randomNumberParsed);
// document.write(`<br>`);
// document.write(randomNumberHigher);
// document.write(`<br>`);

// *************************************************************************************
// ***************************** Exercise 7! *******************************************

// const inBetween0To50 = Math.random();
// document.write(`0-50: ${parseInt(inBetween0To50*50)}<br>`);
// const inBetween10To30 = Math.random();
// document.write(`10-30: ${parseInt(inBetween10To30*20)+10}<br>`);
// const inBetween20To50 = Math.random();
// document.write(`20-50: ${parseInt(inBetween20To50*30)+20}<br>`)
// const inBetween20To50Include50 = Math.random();
// document.write(`20-50 Include: ${Math.round(inBetween20To50Include50*30)+20}<br>`)


// ********************************** Exercise 8 *****************************************
let lowestNum = +prompt(`Enter number`);
let highestNum = +prompt(`Enter another number`);
let randomNumber;
if (highestNum < lowestNum) {
    let helper = lowestNum;
    lowestNum = highestNum;
    highestNum = helper;
}
for (let i=1; i <= 100; i++) {
    let randomNumber = Math.random();
    document.write(`${parseInt(randomNumber*(highestNum-lowestNum))+lowestNum} <br>`);
}