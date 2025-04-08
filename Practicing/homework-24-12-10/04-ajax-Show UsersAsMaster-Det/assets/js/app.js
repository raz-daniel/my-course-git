(() => {



    const collectData = async url => {
        return fetch(url).then(data => data.json())
    }

    const generateSelectHTML = users => {
        const data = users
            .map(user => {
                const { id, name } = user
                return `
        <option value="${id}">${name}</option>
        `
            })
            .join('');
        return data;
    }

    const renderSelectHTML = newSelectHTML => {
        const defaultOption = '<option selected disabled>Select user</option>'
        document.getElementById('SelectBox').innerHTML = defaultOption + newSelectHTML;
    }

    const generateUserNewHTML = userData => {
        const {name, username, email, phone, address: {city, street, zipcode}, company} = userData
        return `
    <li>Name: ${name}</li>
    <li>Username: ${username}</li>
    <li>EMAIL: ${email}</li>
    <li>Phone: ${phone}</li>
    <li>City: ${city}</li>
    <li>Street: ${street}</li>
    <li>Zipcode: ${zipcode}</li>
    <li>Company Name: ${company.name}</li>
    `
    }

    const renderUserNewHTML = userNewHTML => {
        document.getElementById('userList').innerHTML = userNewHTML;
    }





    const loadInitialData = async () => {
        try {
            const data = await collectData('https://jsonplaceholder.typicode.com/users');
            const newSelectHTML = generateSelectHTML(data);
            renderSelectHTML(newSelectHTML)
        } catch (error) {
            console.warn(error)
        }

    }

    loadInitialData()

    document.getElementById('SelectBox').addEventListener('change', async (event) => {
        try {
            const userId = event.target.value;
            const userData = await collectData(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const generateUserHTML = generateUserNewHTML(userData);
            renderUserNewHTML(generateUserHTML);
        } catch (error) {
            console.warn(error)
        }

    })





})()