// boom.js

function isValid(input) {
    return input.trim() !== "" && 
           !isNaN(input) && 
           +input > 0;
}

function isBoom(num) {
    if (num % 7 === 0) return true;

    while (num > 0) {
        if (num % 10 === 7) return true;
        num = Math.floor(num/10);
    }
    return false;
}

function displayValue(value) {
    const div = document.createElement('div');
    const message = isBoom(value) ? 'Boom' : value;
    div.className = isBoom(value) ? 'boom-number' : 'regular-number';  // This line applies the classes
    div.textContent = message;
    document.getElementById('game-container').appendChild(div);
    
    // For debugging
    console.log(`Created element with class: ${div.className}`);  // Add this line to check
}

function startGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear previous game

    const userInput = prompt('7 BOOM: Enter a positive number');

    if (isValid(userInput)) {
        const maxNumber = +userInput;
        
        for (let i = 1; i <= maxNumber; i++) {
            displayValue(i);
        }
    } else {
        gameContainer.innerHTML = 'Error - Please enter a valid positive number!';
    }
}

