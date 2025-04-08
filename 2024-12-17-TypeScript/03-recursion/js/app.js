'use strict';

(() => {

document.getElementById('b1').addEventListener('click', () => {

    printStars(10)

})

// const printStars = (n) => {
//     for (let i=0; i<n; i++) {
//         document.write(`* `)
//     }
// }

const printStars = (n) => { //function signature identical to non recursive solution
    if ( n <= 0) return     //exit condition, otherwise this is an endless loop
    document.write(`* `)    // do a single portion of the entire recursion work
    printStars(n-1)         //adjust the function
}


})()