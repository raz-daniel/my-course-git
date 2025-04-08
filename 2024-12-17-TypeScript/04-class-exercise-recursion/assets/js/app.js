'use strict';

(() => {

document.getElementById('b1').addEventListener('click', () => {

    printNumbers(document.getElementById('input').value)

})

// const printStars = (n) => {
//     for (let i=0; i<n; i++) {
//         document.write(`* `)
//     }
// }

const printNumbers = n => { //function signature identical to non recursive solution
    if ( n <= 0) return     //exit condition, otherwise this is an endless loop
    if (n % 2 !== 0) n--
    document.write(`${n} `)    // do a single portion of the entire recursion work
    printNumbers(n-2)         //adjust the function
}


})()