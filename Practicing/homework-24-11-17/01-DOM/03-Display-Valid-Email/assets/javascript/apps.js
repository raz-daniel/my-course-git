function submitValidation() {
    const userEmailInput = document.getElementById(`email`).value;
    // const emailPattern = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (userEmailInput.trim() === "") {
        alert(`Error - Input must contain EMAIL address`);
    // } else if (!emailPattern.test(userEmailInput)) {
    //     alert(`Error - Please enter a valid email address`);
    } else if (
        !userEmailInput.includes(`@`) ||  
        !userEmailInput.includes(`.`) ||
        userEmailInput.indexOf(`@`) <= 0 ||
        userEmailInput.indexOf(`@`) >= userEmailInput.lastIndexOf(`.`)
    ) {
        alert(`Error - Please enter a valid email address`);
    } else {
        alert(userEmailInput);
    }
}

