function change() {

    const colorInput = document.getElementById(`colorInput`)
    const textInput = document.getElementById(`textInput`)
    const myParagraph = document.getElementById(`myParagraph`)

    const newColor = colorInput.value
    const newText = textInput.value
    
    myParagraph.style.backgroundColor = newColor
    myParagraph.innerText = newText
}