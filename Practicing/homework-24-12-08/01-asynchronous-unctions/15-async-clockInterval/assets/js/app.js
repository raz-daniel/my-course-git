'use strict';
(() => {

const getRandomBackground = () => {
    const colors = [`red`, `orange`, `yellow`, `green`, `cyan`, `blue`, `purple`, `pink`, `brown`, `white`, `gray`]
    const randomNumber = Math.floor(Math.random()*colors.length)
    spanClock.style.backgroundColor = colors[randomNumber];
}
   
const spanClock = document.getElementById('clockSpan');
setInterval(() => {
    spanClock.innerHTML = (new Date().toLocaleTimeString())
    getRandomBackground()
}, 1000)
     
})()