function collectData() {
    const colorName=document.getElementById(`colorName`).value;
    return colorName;
}

function isValid(data) {
    if (isValidColorArray1(data) || isValidColorArray2(data) || isValidColorDiv(data)) {
        return true;
    } return false;
}
function isValidColorArray1(colorName) {
    const colors = [`red`, `blue`, `white`, `black`, `green`, 
        `purple`, `brown`, `grey`, `yellow`, `pink`, `orange`];
    //first method = for of
    for (const color of colors) {
        if (color === colorName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function isValidColorArray2(colorName) {
    //
}

function isValidColorDiv(colorName) {
    //
}

function generateHTMLTable(data) {
    const newHTML = `
    <tr>
        <td Class="myClass-tdColor">${data}</td>
        <td class="myClass-tdColor" style="background-color: ${data.toLowerCase()}"></td>
      </tr>
    `
    return newHTML;
}

let totalColors = 0;

function generateHTMLSpan() {
    totalColors += 1;
    return `The number of colors you wrote are: ${totalColors}`
}

function renderHTML(toTable, toMessage) {
    const renderTable = document.getElementById(`bodyTable`);
    const renderMessage = document.getElementById(`numOfColorSpan`)
    renderTable.innerHTML += toTable;
    renderMessage.innerHTML = toMessage;
}

function clearForm() {
    const resetForm = document.getElementById(`colorsForm`);
    resetForm.reset();
    document.getElementById(`colorName`).focus();
}

function addToTable(event) {
    event.preventDefault();
    const data = collectData();
    if (isValid(data)) {
        const newHTMLTable = generateHTMLTable(data);
        const newHTMLSpan = generateHTMLSpan();
        renderHTML(newHTMLTable, newHTMLSpan);
    }
    clearForm();
}