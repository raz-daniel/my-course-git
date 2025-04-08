'use strict';

    (() => {

        const getAverage = numArray => {
            if (numArray === undefined || numArray === null) { 
                throw new Error(`Error - Input is Undefined or Null`) 
            };
            
            if (!Array.isArray(numArray)) {
                throw new Error(`Error - Input is not an Array`)
            };

            if (numArray.length === 0) {
                throw new Error(`Error - Array Is Empty!`)
            };

            const sum = numArray.reduce((sum, num) => sum + num , 0)
            return sum / numArray.length
        }

        const createArray = event => {
            event.preventDefault();
            const numArray = [];
            try {
                const size = document.getElementById('size').value;
                if (size.trim() === "" || size === null) throw new Error(`Array Size Must contain value`);
                if (isNaN(size)) throw new Error(`Array Size Must contain Numbers!`);
                const newSize = +size;

                for (let i = 0; i < newSize; i++) {
                    const num = prompt(`Enter Number`);
                    if (num === null) throw new Error (`Input cannot be Null`)
                    if (num.trim() === "") throw new Error(`Input Cannot be Empty!`);
                    if (isNaN(num)) throw new Error(`Input Must be a Number`);
                    numArray.push(+num);
                }
                console.log(`the length of the Array is ${size} and the average is ${getAverage(numArray)}`)
            } catch (error) {
                alert(error.message);
            }
        }
        
        document.querySelector('form').addEventListener('submit', createArray);






    })()