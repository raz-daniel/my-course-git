'use strict';
(() => {

    const getPizzaFromServerAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const num = Math.floor(Math.random()*100);
                console.log(num)
                if (num % 2 !== 0) return reject(`Can't connect to Pizza from server`);
                if (num % 2 === 0) {
                    const pizza = {
                        diameter: Math.floor(Math.random()*(50-10)+10),
                        price: Math.floor(Math.random()*(80-20)+20),
                        topping: Math.floor(Math.random()*4)
                    }
                    return resolve(pizza)
                }
            }, 1000)
        })
    }


document.getElementById('showPizza').addEventListener('click', async () => {
    try {
        const result = await getPizzaFromServerAsync()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    
})




})()