'use strict';
(() => {


const getTime = (callback) => {
    setTimeout(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
        const time = hours+`:`+minutes+`:`+seconds;
        callback(time)
    }, 3000);
}



console.log(`Start`);
getTime(firstTime => {
    console.log(firstTime)
    getTime(secondTime => {
        console.log(secondTime)
    })
})
console.log(`End`);

})()