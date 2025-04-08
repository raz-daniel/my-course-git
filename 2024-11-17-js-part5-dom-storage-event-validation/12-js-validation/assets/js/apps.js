function validate(event) {
    
    event.preventDefault()

    const emailInput = document.getElementById(`email`)
    const passwordInput = document.getElementById(`password`)
    const ageInput = document.getElementById(`age`)
    const emailErrorMessage = document.getElementById(`emailErrorMessage`)
    const passwordErrorMessage = document.getElementById(`passwordErrorMessage`)
    


    const email = emailInput.value
    const password = passwordInput.value
    const age = ageInput.value
    
    if (!email) {
        emailErrorMessage.innerHTML = `You Must enter an EMAIL!`
    }

    if (password.length < 8) {
        passwordErrorMessage.innerHTML = `passwords must be at least 8 characters`
    }

    if (!age) {
        
    }
}