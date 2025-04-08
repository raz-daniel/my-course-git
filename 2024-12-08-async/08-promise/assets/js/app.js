"use strict";

(() => {

const getPower = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num === null) reject(`num null!`)
            if (num % 3 !== 0) reject(`Number divide in 3!`);
            resolve(num ** 2)
        },10)
    })
}

document.getElementById('calc').addEventListener('click', () => {
    getPower(+prompt(`Enter Number`))
    .then(result => console.log(result))
    .catch(error => console.log(error))

})

})()