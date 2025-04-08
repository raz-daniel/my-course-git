'use strict';

(() => {

document.getElementById('b1').addEventListener('click', () => {
    printNumbers(document.getElementById('input').value)

})


const printNumbers = (n) => { //function signature identical to non recursive solution
    
    if ( n <= 0 ) return     //exit condition, otherwise this is an endless loop
    printNumbers(n-1)         //adjust the function
    document.write(`${n} `)    // do a single portion of the entire recursion work
    
}


})()