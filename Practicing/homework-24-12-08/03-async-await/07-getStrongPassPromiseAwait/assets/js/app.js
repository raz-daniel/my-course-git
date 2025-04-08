'use strict';
(() => {

const generateStrongPasswordAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const keyBoard = {
                upperCase: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`,
                lowerCase: `abcdefghijklmnopqrstuvwxyz`,
                digits: `0123456789`
            }

            const passKeyBoard = Object.values(keyBoard). join('').split('');
            const password = Array.from({length: 6},() => 
                passKeyBoard[Math.floor(Math.random()*passKeyBoard.length)]
             );

            const hasUpperCase = password.some(char => keyBoard.upperCase.includes(char));
            const hasLowerCase = password.some(char => keyBoard.lowerCase.includes(char));
            const hasDigit = password.some(char => keyBoard.digits.includes(char));

            if (!hasUpperCase || !hasLowerCase || !hasDigit) return reject(`${password.join('')} is weak!`)
            return resolve (`Yeah!! ${password.join('')} is strong!`);

        },1000)
    })
}





document.getElementById('createPass').addEventListener('click', async () => {

    try {
        const result = await generateStrongPasswordAsync()
        console.log(result)
    } catch (e) {
        console.log(e)
    }

})


})()