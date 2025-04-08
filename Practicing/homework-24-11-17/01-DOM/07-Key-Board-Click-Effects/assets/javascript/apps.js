function randomBackgroundColor(button) {
    const colors=["red", "green", "blue", "yellow", "white", "purple"]
    // const input=document.getElementById(`input`);
    button.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
}
