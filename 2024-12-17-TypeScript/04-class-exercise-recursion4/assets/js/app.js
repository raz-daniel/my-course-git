'use strict';

(() => {

document.getElementById('b1').addEventListener('click', () => {
    document.write(`${printNumbers(document.getElementById('input').value)}`);

})


const printNumbers = (n) => { //function signature identical to non recursive solution
    
    if ( n < 3 ) return 1     //exit condition, otherwise this is an endless loop

    return printNumbers(n-1)  + printNumbers(n-2)
    
    
}


})()



/* 
1 = 1
2 = 1
3 = 1 + 1
4 = 1 + 2
5 = 2 + 3 
6 = 
7 = 
8 = 
9 = 
10=
*/