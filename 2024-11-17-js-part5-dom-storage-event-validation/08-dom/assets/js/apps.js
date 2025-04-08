function sayGoodbye() {
    document.getElementById(`myParagraph`).innerText=`Goodbye`
}

function saveName() {
    const name = document.getElementById(`nameInput`).value;
    localStorage.setItem(`username`, name);
}

function restoreName() {
    const name = localStorage.getItem(`username`)
    document.getElementById(`nameInput`).value = name
}