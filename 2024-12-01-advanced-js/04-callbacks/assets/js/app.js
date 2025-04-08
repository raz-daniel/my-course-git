function power2(num) {
    return num ** 2
}

//a function that is sent as  an argument to another function is called Callback
//why? because the function that is passed as an argument is called back by the function that receives it as an argument

function printPower2(num, powerFunc) {
    if (typeof powerFunc !== `function`) return
    console.log(powerFunc(num))
}

printPower2(3,power2)