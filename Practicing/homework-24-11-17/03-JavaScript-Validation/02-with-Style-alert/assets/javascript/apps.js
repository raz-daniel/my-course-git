function validate() {
    const userFirstName = document.getElementById(`userFirstName`);
    if (!userFirstName) return;

    const firstName = userFirstName.value;
    if (firstName.trim() === "") {
        alert(`Error - Empty Input!`);
        userFirstName.style.backgroundColor=`pink`;
    } else {
        alert(`First Name: ${firstName}`); 
        userFirstName.style.backgroundColor=`white`;
    }
}