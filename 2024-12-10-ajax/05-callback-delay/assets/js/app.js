"use strict";

(() => {


    document.getElementById('button').addEventListener('click', () => {

        setTimeout(() => {
            console.log(new Date())
        }, 2000)
        for (let i=0; i < 10000; i++) {
            console.log(`hey`)
        }
    })


    document.getElementById('button2').addEventListener('click', () => {

        
            console.log('clicked')
        
    })

})()


