'use strict';
(() => {


const getTime = callback => {
    setTimeout(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
        const time = hours+`:`+minutes+`:`+seconds;
        callback(time)
    }, 3000);
}

const getTime3SecBefore = callback => {
    setTimeout(() => {
        const now = new Date()
        const time3SecBack = new Date(now.getTime() -3000)
        const hours = String(time3SecBack.getHours()).padStart(2, '0')
        const minutes = String(time3SecBack.getMinutes()).padStart(2, '0')
        const seconds = String(time3SecBack.getSeconds()).padStart(2, '0')
        const time = hours+`:`+minutes+`:`+seconds;
        callback(time)
    }, 3000);
}


console.log(`Start`);
getTime(console.log)
getTime3SecBefore(time => {
    console.log(`3 second before the time was: ${time}`);
})
console.log(`End`);


})()