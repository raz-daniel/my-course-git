function collectAnimalData() {
    const animalType = document.getElementById(`animalType`).value
    const animalName = document.getElementById(`animalName`).value
    const animalAge = document.getElementById(`animalAge`).value
    const animalUrl = document.getElementById(`animalUrl`).value

    if (animalAge <= 0) {
        alert (`Age must be Positive`);
        return false;
    } return {
        type: animalType,
        name: animalName,
        age: animalAge,
        url: animalUrl
    }
}

function generateAnimalHTML(animalData) {
    return `
    <tr>
        <td>${animalData.type}</td>
        <td>${animalData.name}</td>
        <td>${animalData.age}</td>
        <td><img src="${animalData.url}"></td>
      </tr>
    `
}

function renderAnimalHTML(newAnimalHTML) {
    const renderAnimalToTable = document.getElementById(`animalInfoTbody`);
    renderAnimalToTable.innerHTML += newAnimalHTML;
}

function saveAnimalDataToLocalStorage(animalNewData) {
    const getAnimalsFromStorage = JSON.parse(localStorage.getItem(`animals`) || `[]`);
    getAnimalsFromStorage.push(animalNewData);
    localStorage.setItem(`animals`, JSON.stringify(getAnimalsFromStorage))
}

function resetForm() {
    const formId = document.getElementById(`animalsInfoForm`);
    formId.reset();
    const animalType = document.getElementById(`animalType`);
    animalType.focus();
}

function addAnimalToTable(event) {
    event.preventDefault();
    const animalData = collectAnimalData();
    if (animalData) {
        const newAnimalHTML = generateAnimalHTML(animalData);
        renderAnimalHTML(newAnimalHTML);
        saveAnimalDataToLocalStorage(animalData);
        resetForm()
    }
}

function loadAnimalDataFromStorage() {
    const animals = JSON.parse(localStorage.getItem(`animals`) || []);
    for (const animal of animals) {
        const newAnimalHTML = generateAnimalHTML(animal);
        renderAnimalHTML(newAnimalHTML);
    }
}

loadAnimalDataFromStorage();