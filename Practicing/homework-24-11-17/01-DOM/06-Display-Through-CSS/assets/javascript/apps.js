function hover(button) {
    button.style.backgroundColor = "red";
    button.style.color = "blue";
}

function regular(button) {
    button.style.backgroundColor = "green";
    button.style.color = "white";
}

function hover(button) {
    button.classList.add(`hover`)
}

function regular(button) {
    button.classList.remove(`hover`)
}