const generatePassword = (length) => {
    const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-=+~`{}[]\|"?><*'
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length)
        password += possibleChars[randomIndex]
    }
    return password
}

module.exports = {
    generatePassword
}