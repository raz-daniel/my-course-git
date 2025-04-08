const showDiscount = event => {
    event.preventDefault();
    const age = document.getElementById(`age`).value;
    try {
        console.log(checkDiscount(age) ? `You qualify for 20% senior discount!` : `Standard pricing applies`)    
    } catch (error) {
        console.log(error.message)
    }
}

const checkDiscount = age => {
    if (age.trim() === "") throw new Error("Must enter input");
    if (isNaN(age)) throw new Error (`Numbers only`)
    if (age >120 || age < 0) throw new Error (`Age must be 0-120`)
    if (age >= 65) return true;
    return false;
}