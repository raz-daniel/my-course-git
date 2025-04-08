let totalSum = 0;
function sum() {
    const numOneBox = document.getElementById(`numberOne`);
    const numTwoBox = document.getElementById(`numberTwo`);
    const numThreeBox = document.getElementById(`numberThree`);

    const num1 = Number(numOneBox.value);
    const num2 = Number(numTwoBox.value);
    const num3 = Number(numThreeBox.value);

    totalSum = num1 + num2 + num3;
    alert (`${num1} + ${num2} + ${num3} = ${totalSum}`);
    return totalSum;
}

function average() {
    const divider = 3;
    const average = totalSum / divider;
    alert(`${totalSum} / ${divider} = ${average}`);
}