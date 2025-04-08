"use strict";

(() => {

    const getCurrentPositionPromise = () => {
        return new Promise ((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)    
        })
    }


    document.getElementById('button').addEventListener('click', async () => {
        try {
            const position = await getCurrentPositionPromise()
            console.log(position.coords)
        } catch (error) {
            console.warn(error)
        }
    })

})()


