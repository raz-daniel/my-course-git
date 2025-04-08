let totalPhotos = 0;

function collectData() {
    const photoDetail = document.getElementById(`photoDetailsInput`).value;
    const photoUrl = document.getElementById(`photoUrlInput`).value;
    totalPhotos += 1;
    return {
        photo: photoDetail,
        url: photoUrl,
        count: totalPhotos
    }
}


function generateHTML(data) {
    const newHTML = {
        newTable: `<tr>
        <th scope="col">${data.photo}</th>
        <th scope="col"><img src="${data.url}"></th>
      </tr>`,
        newSpan:`Pictures Count is: ${data.count}`
}
return newHTML;

}

function renderHTML(newHTML) {
    document.getElementById(`carsTable`).innerHTML += newHTML.newTable
    document.getElementById(`existsPhoto`).innerHTML = newHTML.newSpan
}

function clearForm() {
    document.getElementById(`carsForm`).reset()
    document.getElementById(`photoDetailsInput`).focus()
}

function saveToStorage(data) {
    const currentDataInStorage = localStorage.getItem(`cars`);
    let carArray;
    if (!currentDataInStorage) {
        carArray = []
    } else {
        carArray = JSON.parse(currentDataInStorage);
    }
    carArray.push(data);
    localStorage.setItem(`cars`, JSON.stringify(carArray))
}

function addToTable(event) {
    event.preventDefault();
    const data = collectData();
    const newHTML = generateHTML(data);
    saveToStorage(data);
    renderHTML(newHTML);
    clearForm();
}


function loadCarsFromLocalStorage() {
    const carsFromLocalStorage = localStorage.getItem(`cars`);
    if (carsFromLocalStorage) {
        const cars = JSON.parse(carsFromLocalStorage);
        for (const car of cars) {
            const newHTML = generateHTML(car); 
            renderHTML(newHTML);
        }
    }
}



loadCarsFromLocalStorage();