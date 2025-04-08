'use strict';
(() => {

    const getRandom = (successCallback, errorCallback) => {
            const max = document.getElementById('inputNum').value
            if (max.trim() === "") {
                errorCallback(`Empty Input!`);
                return
            }
            if (isNaN(max)) {
                errorCallback(`Empty Must be a Number`);
                return
            }
            const maxNum = +max
            const randomNum = Math.round(Math.random() * maxNum)
            successCallback(randomNum)
        }


    const div = document.getElementById('Random')
    
    const successRandom = num => {
        div.innerHTML = `<span>${num}</span>`
    }
    const failure = error => {
        console.log(error)
    }
    setInterval(() => {
        getRandom(successRandom,failure)
    }, 1000)

})()