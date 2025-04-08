function populate() {
    const animals = ['dog', 'cat', 'fish']
    const container = document.getElementById(`container`)
    // container.innerHTML="<li>dog</li>"

    for (const animal of animals) {
        container.innerHTML += `<li>${animal}</li>`
    }
}

function populateImages() {
    const images = [
        'hippo.jpg', `tiger.jpg`
    ]
    const container = document.getElementById(`imagesContainer`);
    let newHTML = ``
    for (const image of images) {
        newHTML += `<img src="assets/photos/${image}" /> &nbsp ;`
    }
    container.innerHTML = newHTML;
}

function addFruits() {
    const container=document.getElementById(`fruits`);
    const fruit = prompt(`Enter fruit`);
    const newHTML = `<li>${fruit}</li>`;
    container.innerHTML += newHTML;
}

function addCar() {
    //collect data
    const container=document.getElementById(`cars`);
    const car = document.getElementById(`car`).value;
    // generate new html
    const newHTML = `<li>${car}</li>`;
    //render the dom
    container.innerHTML += newHTML;
}