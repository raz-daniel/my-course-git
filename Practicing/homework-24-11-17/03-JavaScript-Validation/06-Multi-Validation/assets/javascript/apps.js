

function isValid(input, inputSpan) {
    if (input.value.trim() === "") {
        input.style.background = `red`;
        inputSpan.innerText = `Error - Input is empty!`
        return false;
    }
    if (input.value.length < 2) {
        input.style.background = `red`;
        inputSpan.innerText = `Error - Input must be more than 2 characters!`
        return false;
    }
    if (input.value.length > 30) {
        input.style.background = `red`;
        inputSpan.innerText = `Error - Input must be less than 30 characters!`
        return false;
    }
    input.style.background = `white`;
    inputSpan.innerText = ``
    return true;
}


function validate() {
    const firstNameInput = document.getElementById(`firstName`);
    let firstNameSpan = document.getElementById(`firstNameSpan`);
    const lastNameInput = document.getElementById(`lastName`);
    let lastNameSpan = document.getElementById(`lastNameSpan`);
    const emailInput = document.getElementById(`email`);
    let emailSpan = document.getElementById(`emailSpan`);

    if (isValid(firstNameInput, firstNameSpan) && isValid(lastNameInput, lastNameSpan) && isValid(emailInput, emailSpan)) {
        alert(` First Name: ${firstName.value}\n Last Name: ${lastName.value}\n EMAIL Address: ${email.value}`);
    }



}