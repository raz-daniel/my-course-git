const number = +prompt(`Write a number from 1 to 5`);
// if (number === 1) document.write(`One`)
// else if (number === 2) document.write(`two`)
// else if (number === 3) document.write(`three`)
// else if (number === 4) document.write(`four`)
// else if (number === 5) document.write(`five`)
// else document.write(`invalid`)


switch(number){
    case 1: document.write(`one`); break;
    case 2: document.write(`two`); break;
    case 3: document.write(`three`); break;
    case 4: document.write(`four`); break;
    case 5: document.write(`five`); break;
    default: document.write(`Error`)
}
