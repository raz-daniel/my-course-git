'use strict';
(() => {

    const generate7BoomAfterDelayAsync = (min, max) => {
        console.log("Function called with:", min, max); // Debug log 1
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const num = Math.round(Math.random() * (max - min) + min);
                console.log("Generated number:", num); // Debug log 2
                if (num % 10 !== 7 && num % 7 !== 0) return reject(`Error - ${num} not divid in 7 and not finish in 7`);
                return resolve(`Success!!! ${num} is perfect`)
            }, 1000)
        })
    }

    document.getElementById('displayNum').addEventListener('click', async () => {
        console.log("Button clicked"); // Debug log 3
        const userMin = document.getElementById('userMin').value
        const userMax = document.getElementById('userMax').value

        try {
            const min = +userMin
            const max = +userMax
            console.log("Values received:", min, max); // Debug log 4
            const promise = await generate7BoomAfterDelayAsync(min, max)
            console.log(promise)
        } catch (error) {
            console.log(error)
        }
    })
})()