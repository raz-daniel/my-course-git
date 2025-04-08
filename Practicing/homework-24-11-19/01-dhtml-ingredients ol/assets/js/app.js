function collectData() {
    const ingredientInput=document.getElementById(`ingredient`).value
    const amountInput=document.getElementById(`amount`).value
    
    return {
        ingredient: ingredientInput,
        amount: amountInput
    }

}

function generateHTML(data) {
    const newHTML = `
    <li class="list-group-item">
    Ingredient: <span class="text-decoration-underline">${data.ingredient}</span>, 
    Amount: <span class="text-decoration-underline">${data.amount}</span>
    </li>
    `
    return newHTML;
}

function renderHTML(newHTML) {
    const orderList = document.getElementById(`orderList`)
    orderList.innerHTML += newHTML;
}

function clearForm() {
    const resetForm = document.getElementById(`ingredientsForm`);
    resetForm.reset();

    document.getElementById(`ingredient`).focus();
}

function addIngredients(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    clearForm()
}