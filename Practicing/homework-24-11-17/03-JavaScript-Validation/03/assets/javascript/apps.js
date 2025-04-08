function errorMessage(message. color) {
    //
}

function message() {
    const firstNameInput = document.getElementById(`firstName`);
    if (!firstNameInput.value) {
        document.getElementById(`span`).innerText=`Wrong`;
        firstNameInput.style.backgroundColor=`pink`
    } else {
        alert(firstNameInput.value);
        document.getElementById(`span`).innerText=``;
        firstNameInput.style.backgroundColor=`white`
    }
}