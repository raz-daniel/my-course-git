const city = document.getElementById(`city`);
const street = document.getElementById(`street`);
const streetNum = document.getElementById(`streetNum`);
const postalCode = document.getElementById(`postalCode`);

function save() {
    const myData = {
        city: city.value,
        street: street.value,
        streetNum: streetNum.value,
        postalCode: postalCode.value
    }

    localStorage.setItem(`address`, JSON.stringify(myData));

}

function load() {
    const data = localStorage.getItem(`address`);
    const jsonData = JSON.parse(data);
    city.value=jsonData.city
    street.value=jsonData.street
    streetNum.value=jsonData.streetNum
    postalCode.value=jsonData.postalCode
}

