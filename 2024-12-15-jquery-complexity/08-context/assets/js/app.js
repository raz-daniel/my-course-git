'use strict';

(() => {

    function sayHello() {
        console.log(this);
    }

console.log(this)

sayHello()

})()