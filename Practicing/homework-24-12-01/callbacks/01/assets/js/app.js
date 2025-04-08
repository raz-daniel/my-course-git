/* 

// **********************************
//        Exercise 1
// **********************************         
function printMyName() {
    console.log(`daniel`);
}

function executeCallback(callback) {
    callback()
}
//normal
executeCallback(printMyName)

//inline
executeCallback(function printMyName() {
    console.log(`daniel`);
})

//anonymous
executeCallback(function() {
    console.log(`daniel`);
})
    
//arrow
executeCallback(() => console.log(`daniel`))


// **********************************
//        Exercise 2
// **********************************

function cool(callback) {
    callback();
}

//normal
function randomNumber() {
    console.log(Math.random()*100)
}
cool(randomNumber)

//inline
cool(function randomNumber() {
    console.log(Math.random()*100)
})

//anonymous
cool(function() {
    console.log(Math.random()*100)
})

//arrow
cool(() => console.log(Math.random()*100))


// **********************************
//        Exercise 3
// **********************************

function nice(callback) {
    callback(42);
}

//normal
function number(num) {
    console.log(num);
}
nice(number)

//inline
nice(function number(num) {
    console.log(num);
})

//anonymous
nice(function (num) {
    console.log(num);
})

//arrow
nice(num => console.log(num))


// **********************************
//        Exercise 4
// **********************************

function amazing(callback) {
    const num=callback(42,128,37,81,66);
    console.log(`num: ` + num);          /////////////// CHECK YOUR QUESTION PLEASE!!!! - document.write isn't possible
}
//normal
function getPrintRandomNumber(num1, num2, num3, num4, num5) {
    let randNum = Math.floor(Math.random()*5)+1;
    switch (randNum) {
        case 1:
            console.log(num1);
            return num1
        case 2:
            console.log(num2);
            return num2
        case 3:
            console.log(num3);
            return num3
        case 4:
            console.log(num4);
            return num4
        case 5:
            console.log(num5);
            return num5
    }
}
amazing(getPrintRandomNumber)

//inline
amazing(function getPrintRandomNumber(num1, num2, num3, num4, num5) {
    let randNum = Math.floor(Math.random()*5)+1;
    switch (randNum) {
        case 1:
            console.log(num1);
            return num1
        case 2:
            console.log(num2);
            return num2
        case 3:
            console.log(num3);
            return num3
        case 4:
            console.log(num4);
            return num4
        case 5:
            console.log(num5);
            return num5
    }
})

//anonymous
amazing(function (num1, num2, num3, num4, num5) {
    let randNum = Math.floor(Math.random()*5)+1;
    switch (randNum) {
        case 1:
            console.log(num1);
            return num1
        case 2:
            console.log(num2);
            return num2
        case 3:
            console.log(num3);
            return num3
        case 4:
            console.log(num4);
            return num4
        case 5:
            console.log(num5);
            return num5
    }
})

//arrow
amazing((num1, num2, num3, num4, num5) => {
    let randNum = Math.floor(Math.random()*5)+1;
    switch (randNum) {
        case 1:
            console.log(num1);
            return num1
        case 2:
            console.log(num2);
            return num2
        case 3:
            console.log(num3);
            return num3
        case 4:
            console.log(num4);
            return num4
        case 5:
            console.log(num5);
            return num5
    }
})

// **********************************
//        Exercise 5
// **********************************

function cool(paintCallback) {
    paintCallback();
}

//normal
function printScreenRandomColor() {
    const colors=[`red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `brown`, `gray`, `black`, `white`]
    const randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor=colors[randomNum];
}
cool(printScreenRandomColor)

//inline
cool(function printScreenRandomColor() {
    const colors=[`red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `brown`, `gray`, `black`, `white`]
    const randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor=colors[randomNum];
})

//anonymous
cool(function () {
    const colors=[`red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `brown`, `gray`, `black`, `white`]
    const randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor=colors[randomNum];
})

//arrow
cool(() => {
    const colors=[`red`, `orange`, `yellow`, `green`, `blue`, `purple`, `pink`, `brown`, `gray`, `black`, `white`]
    const randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor=colors[randomNum];
})

// **********************************
//        Exercise 6
// **********************************

function nice (paintCallback) {
    paintCallback(`green`)
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor=color;
}

nice(setBackgroundColor)
nice(function setBackgroundColor(color) {
    document.body.style.backgroundColor=color;
})
nice(function (color) {
    document.body.style.backgroundColor=color;
})
nice(color => document.body.style.backgroundColor=color)

// **********************************
//        Exercise 7
// **********************************

function amazing(paintCallback) {
    const paintedColor = paintCallback(`red`, `green`, `blue`);
    console.log(`Painted Color: ` + paintedColor)   ///// AGAIN CANNOT DOCUMENT WRITE!!!
}

function setColor(color1, color2, color3) {
    const randomNumber = Math.ceil(Math.random()*3);
    switch (randomNumber) {
        case 1:
            document.body.style.backgroundColor=color1;
            return color1;
        case 2:
            document.body.style.backgroundColor=color2;
            return color2;
        case 3:
            document.body.style.backgroundColor=color3;
            return color3;
    }
}

amazing(setColor);
amazing(function setColor(color1, color2, color3) {
    const randomNumber = Math.ceil(Math.random()*3);
    switch (randomNumber) {
        case 1:
            document.body.style.backgroundColor=color1;
            return color1;
        case 2:
            document.body.style.backgroundColor=color2;
            return color2;
        case 3:
            document.body.style.backgroundColor=color3;
            return color3;
    }
})

amazing(function (color1, color2, color3) {
    const randomNumber = Math.ceil(Math.random()*3);
    switch (randomNumber) {
        case 1:
            document.body.style.backgroundColor=color1;
            return color1;
        case 2:
            document.body.style.backgroundColor=color2;
            return color2;
        case 3:
            document.body.style.backgroundColor=color3;
            return color3;
    }
})

amazing((color1, color2, color3) => {
    const randomNumber = Math.ceil(Math.random()*3);
    switch (randomNumber) {
        case 1:
            document.body.style.backgroundColor=color1;
            return color1;
        case 2:
            document.body.style.backgroundColor=color2;
            return color2;
        case 3:
            document.body.style.backgroundColor=color3;
            return color3;
    }
})

// **********************************
//        Exercise 8
// **********************************

setInterval(randomNumber, 1 * 1000)

function randomNumber() {
    const randNum=Math.ceil(Math.random()*100)
    document.getElementById(`write-block`).innerHTML = `<h2>${randNum}</h2>`
}

setInterval(function randomNumber() {
    const randNum=Math.ceil(Math.random()*100)
    document.getElementById(`write-block`).innerHTML = `<h2>${randNum}</h2>`
}, 1 * 1000)

setInterval(function () {
    const randNum=Math.ceil(Math.random()*100)
    document.getElementById(`write-block`).innerHTML = `<h2>${randNum}</h2>`
}, 1 * 1000)

setInterval(() => {
    const randNum=Math.ceil(Math.random()*100)
    document.getElementById(`write-block`).innerHTML = `<h2>${randNum}</h2>`
}, 1 * 1000)


*/

// **********************************
//        Exercise 9
// **********************************
