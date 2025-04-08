'use strict';
(() => {


const generate7BoomAfterDelayAsync = (min,max) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const num = Math.round(Math.random()*((+max)-(+min))+(+min))
            if (num % 10 !== 7 && (num % 7 !== 0)) return reject (`Num Not Divide in 7 or End with 7`);
            resolve (num)
        }, 1000);

    })
}

document.getElementById('showNum').addEventListener('click', () => {
    const inputMin = document.getElementById('minInput').value
    const inputMax = document.getElementById('maxInput').value
    if (inputMax<inputMin) return alert(`Max must be bigger than Min`);
    generate7BoomAfterDelayAsync(inputMin,inputMax)
        .then (console.log)
        .catch (console.log)
})


})()