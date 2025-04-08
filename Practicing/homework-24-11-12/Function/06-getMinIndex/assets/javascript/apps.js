// **************************
// Return Value - Exercise 06
// **************************

function getMinIndex(array) {
    let min = Infinity;
    let index;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

document.write(getMinIndex([99, 13, 4]));


