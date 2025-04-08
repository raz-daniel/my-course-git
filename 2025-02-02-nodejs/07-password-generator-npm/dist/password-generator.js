"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const generatePassword = (length, allowSpecialChars = false) => {
    // Type checking for JavaScript users
    const errors = [];
    if (typeof length !== 'number') {
        errors.push('Length must be a number');
    }
    if (length < 3) {
        errors.push('Password length must be at least 3 characters');
    }
    if (length > 20) {
        errors.push('Password length must be at maximum 20 characters');
    }
    if (length !== Math.floor(length)) {
        errors.push('Length must be a whole number');
    }
    if (errors.length > 0)
        throw new Error(errors.join(', '));
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '1234567890';
    const specialChars = '`~!@#$%^&*()-_=+{}[]|?><';
    let possibleChars = upperCaseLetters + lowerCaseLetters + numericChars;
    let password = '';
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numericChars[Math.floor(Math.random() * numericChars.length)];
    if (length > 3 && allowSpecialChars) {
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
        possibleChars += specialChars;
        for (let i = 4; i < length; i++) {
            password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
        }
    }
    else if (length > 3) {
        for (let i = 3; i < length; i++) {
            password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
        }
    }
    return password;
};
exports.generatePassword = generatePassword;
