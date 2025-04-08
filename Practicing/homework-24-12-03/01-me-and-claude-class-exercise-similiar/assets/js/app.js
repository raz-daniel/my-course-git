const showPrice = event => {
    event.preventDefault();
    const price = document.getElementById(`userPriceInput`).value;
    try {
        console.log(`after calculating vat, the new price is ${calcVat(price)}`)    
    } catch (error) {
        console.log(error.message);
    }
}

const calcVat = price => {
    if (price.trim() === "") throw new Error(`Must enter input`);
    const newPrice = +price;
    if (isNaN(newPrice)) throw new Error(`Input must be numbers`);
    if (newPrice > 1000 || newPrice < 100) throw new Error(`Number must be between 100 to 1000`);
    return newPrice*1.05
}