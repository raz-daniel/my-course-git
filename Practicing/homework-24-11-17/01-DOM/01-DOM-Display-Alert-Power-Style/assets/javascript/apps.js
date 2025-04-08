// *******************************************
// *******   Exercise 01   *******************
// *******************************************


function change() {
    const pow=3;
    const userInputBox = document.getElementById(`userNumberInput`);
    const userNumber=Number(userInputBox.value);
    const newNumber = Math.pow(userNumber, pow);

    alert(`The Number you chose ${userNumber} Power ${pow} is = ${newNumber}`)
    userInputBox.style.backgroundColor = "lightblue";
}