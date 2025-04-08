'use strict';
(() => {

    const getPower = (num, successCallback, errorCallBck) => {
        setTimeout(() => {
            if (num === null) {
                errorCallBck(`Error - Num is Null!!`);
                return;
            }
            if (num.trim() === "") {
                errorCallBck(`Error - Num is Empty`);
                return;
            }
            if (isNaN(num)) {
                errorCallBck(`Error - Num Must be a Number`);
                return;
            }
            if (typeof num === `undefined`) {
                errorCallBck(`Error - Num is Undefined!`);
                return;
            }
            if (+num % 3 === 0) {
                errorCallBck(`Error - Num divide in 3!!`);
                return;
            }
            successCallback(num ** 2)

        }, 3000)
    }

    document.getElementById(`power4`).addEventListener('click', () => {
        const num = prompt(`Enter number`);
        
        const success = newNum => {
            console.log(`the power of ${num} is ${newNum}`)
        }

        const error = message => {
            console.log(message)
        }
   
        getPower(num, success, error)
    })

})





()