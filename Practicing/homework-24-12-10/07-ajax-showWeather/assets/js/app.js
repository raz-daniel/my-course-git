(()=>{

const collectData = async url => {
    return fetch(url).then(data => data.json());
}

const generateHTML = weatherData => {
    const {location: {name}, current: {temp_c, temp_f, condition: {text, icon}} } = weatherData;
    return `
        <li>Current Weather in ${name}</li>
        <li>Temperature in C: ${temp_c}</li>
        <li>Temperature in F: ${temp_f}</li>
        <li>Condition is: ${text}</li>
        <img src="${icon}">
    `
}



const renderHTML = newHTML => {
    document.getElementById('weatherUl').innerHTML = newHTML
}

document.getElementById('cities').addEventListener('change', async (event) => {
    try {
        const city = event.target.value;
        const weatherData = await collectData(`https://api.weatherapi.com/v1/current.json?key=22d63dbf329f401eacd220718241112&q=${city}`);
        const newHTML = generateHTML(weatherData);
        renderHTML(newHTML)
    } catch (error) {
        console.warn(error)
    }
    
})

})()