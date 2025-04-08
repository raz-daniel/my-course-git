(() => {


const collectData = async url => {
    return fetch(url).then(data => data.json());
}

const generateHTML = user => {
    const {id, name , username, email, address: {city, street, zipcode}, phone, company} = user
    return `
        <h3>Information regarding user ID num: ${id}</h3>
        <li>Name: ${name}</li>
        <li>Username: ${username}</li>
        <li>EMAIL: ${email}</li>
        <li>Phone Number: ${phone}</li>
        <li>City: ${city}</li>
        <li>Street: ${street}</li>
        <li>Zip Code: ${zipcode}</li>
        <li>Company Name: ${company.name}</li>
    `
}

const renderUserHTML = newHTML => document.getElementById('userInfo').innerHTML = newHTML;

document.getElementById('ajax').addEventListener('click', async () => {
    try {
        const userNum = document.getElementById('userId').value;
        const data = await collectData('https://jsonplaceholder.typicode.com/users/'+userNum);
        const newHTML = generateHTML(data);
        renderUserHTML(newHTML);
    } catch (error) {
        console.warn(error)       
    }
})

})()