'use strict';
(() => {

    const generateStrongPasswordAsync = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const arrayOfPasswordOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E',
                    'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                const arrayBigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                const arraySmallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                const arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

                const strongPass = []
                const strongPassCheck = ['0', '0', '0']
                for (let i = 0; i < 6; i++) {
                    const selected=arrayOfPasswordOptions[Math.floor(Math.random() * arrayOfPasswordOptions.length)]
                    strongPass.push(selected);
                    const bigLatter = arrayBigLetters.find(letter => letter === strongPass[i]);
                    const smallLetter = arraySmallLetters.find(letter => letter === strongPass[i]);
                    const num = arrayNumbers.find(letter => letter === strongPass[i]);
                    if (bigLatter) strongPassCheck[0] = '1';
                    if (smallLetter) strongPassCheck[1] = '1';
                    if (num) strongPassCheck[2] = '1';
                }
                if (strongPassCheck.find(letter => letter === '0')) return reject(`pass ${strongPass} is weak.`);
                return resolve(`${strongPass} is a great pass!`)
                
        }, 1000)
        })
    }




    document.getElementById('strongPass').addEventListener('click', () => {
        generateStrongPasswordAsync()
            .then(console.log)
            .catch(console.log)

    })


})()