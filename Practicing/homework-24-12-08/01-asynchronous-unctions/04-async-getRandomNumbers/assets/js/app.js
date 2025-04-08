'use strict';
(() => {

    const getRandom = (time, callback) => {
        setTimeout(() => {
            const randomNum = Math.round(Math.random()*100);
            callback(randomNum)
        }, time * 1000)
    }


    console.log(`Start`);
    getRandom(3, (num1) => {
        console.log(`First Num 3 Second: ${num1}`)
        getRandom(5, (num2) => {
            console.log(`Second Num 5 Second: ${num2}`)
            getRandom(7, (num3) => {
                console.log(`Third Num 7 Second: ${num3}`)
            })
        })
    })
   console.log(`End`);
     
})()