'use strict';

(() => {

    const createArray = (event) => {
        event.preventDefault();
        const myArray = [];
        try {
            const size = document.getElementById('size').value;
            if (size <= 0) throw new Error(`Numbers must be positive`);
            if (size > 20) throw new Error(`Maximum is 20...`)
            
            for (let i = 0; i < size; i++) {
                const num = prompt(`Enter Number`);
                if (num === null || num.trim() === "" || isNaN(num)) throw new Error (`Input Cancelled`)
                myArray.push(Number(num))
            }
            console.log(`Average of Array is: ${getAverage(myArray)}`);
        } catch (error) {
            console.log(error.message)
        }

    }


    const getAverage = arrayNum => {
        if (!arrayNum) throw new Error(`Input is Undefined or Null`);
        if (!Array.isArray(arrayNum)) throw new Error(`Input must be Array`);
        if (arrayNum.length === 0) throw new Error(`Array Must Contain Numbers`);
        
        const sum = arrayNum.reduce((cumulative, arr) => cumulative + arr, 0);
        return sum / arrayNum.length
    }

    // const formDisable = event => {
    //     event.preventDefault();
    // }


    document.getElementById('myForm').addEventListener('submit', createArray);
    // document.getElementById('myForm').addEventListener('submit', formDisable);

})()
