"use strict";

(() => {

    const getPower = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num % 3 === 0) {
                    reject(`Number divide in 3!`)
                } else {
                    resolve(num ** 2)
                }
            }, 3000)
        })
    }

    document.getElementById('calc').addEventListener('click', () => {
        const num = +prompt(`Enter Number`)
        const promise = getPower(num)
        console.log(promise) //pending
        setTimeout(() => console.log(promise), 4000) // fullfill

    })

})()