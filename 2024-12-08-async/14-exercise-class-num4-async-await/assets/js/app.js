"use strict";

(async () => {

    const getPower = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (+num % 3 === 0) return reject (`Number Divided in 3!`);
                resolve (num ** 2)
            }, 2000)
        })
    }

    document.getElementById('calc').addEventListener('click',async () => {
        const num = +prompt(`Enter Number`);
        try {
            const newNum = await getPower (num)
            console.log(newNum);
        } catch (error) {
            console.log(error)
        }
        
    })
    
})()