"use strict";

(() => {


const getRandomColorAfterDelay = (callback) => {
    const colors = [`red`, `yellow`, `blue`, `green`, `pink`];
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setTimeout(() => {callback(randomColor)} , 2000)

}


document.getElementById(`getRandomColor`).addEventListener(`click`, () => {
    console.log(`begin`);
    getRandomColorAfterDelay((color) => {
        document.body.style.backgroundColor=`${color}`
    })
    console.log(`finish`);
})

})()