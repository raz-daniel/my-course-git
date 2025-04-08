(()=>{

const collectData = async url => {
    return fetch(url).then(data => data.json());
}

const generateHTML = users => {
    const data = users.data
    .map(user => {
        const {first_name, last_name, email, avatar} = user
        return `
        <tr>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${email}</td>
            <td><img src="${avatar}"></td>
        </tr>
        `
    })
    .join('')

    return data;
}

const renderHTML = newHTML => {
    document.getElementById('usersTable').innerHTML = newHTML;
}

const onload = async () => {
    try {
        const data = await collectData('https://reqres.in/api/users');    
        const newHTML = generateHTML(data)
        renderHTML(newHTML)
    } catch (error) {
        console.warn(error)
    }
    
}


    onload()
})()