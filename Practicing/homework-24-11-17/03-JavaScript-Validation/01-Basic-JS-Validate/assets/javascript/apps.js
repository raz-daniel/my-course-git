function firstName() {
    const firstName = document.getElementById(`firstName`).value;
    (!firstName || firstName.trim() === "") ? alert(`Error - Fill your first name`) : alert(firstName);
}