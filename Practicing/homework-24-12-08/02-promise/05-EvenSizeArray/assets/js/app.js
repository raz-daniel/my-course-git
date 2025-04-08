'use strict';
(() => {

const generateWorkingDayAfterDelayAsync = size => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const num = prompt(`Enter number`);
        if (!num || num === null || isNaN(num) || num.trim() === "" || num < 1) return reject(`Error - must be positive number`);
        if (+num % 2 !== 0) return reject(`Error - ${num} is odd... cannot bring array from server.`);
        
            const numArray = []
            for (let i=0; i < size; i++) {
                numArray.push(Math.floor(Math.random()*100))
        
            return resolve (numArray);
        }
    }, 1000)
    })

}



document.getElementById('showArray').addEventListener('click', () => {
const sizeInput = prompt(`Enter array length`);
if (!sizeInput || sizeInput === null || isNaN(sizeInput) || sizeInput.trim() === "" || sizeInput < 1 || sizeInput > 999) 
    return alert(`Input must be a number between 1-999`);
generateWorkingDayAfterDelayAsync(+sizeInput)
    .then(console.log)
    .catch(console.log)


})



})()