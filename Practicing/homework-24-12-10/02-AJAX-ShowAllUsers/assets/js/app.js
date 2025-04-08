'use strict';
(async () => {

    const CollectData = async url => {
        return fetch(url).then(info => info.json())
    }

    const generateHTML = usersData => {
        const newHTML = usersData
            .map(user => {
                const { name, username, email, address, phone, company } = user;
                return `<tr>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${address.city}</td>
                    <td>${address.street}</td>
                    <td>${address.zipcode}</td>
                    <td>${company.name}</td>
                    </tr>
                `
            })
            .reduce((cumulative, current) => cumulative + current, '');
        return newHTML;
    }

    const generateStats = usersData => {
        const users = usersData.length;
        const latitudeSum = usersData.reduce((cumulative, current) => {
            return cumulative + +current.address.geo.lat
        }, 0)
        const latitudeAverage = latitudeSum / users
        const longitudeSum = usersData.reduce((cumulative, current) => {
            return cumulative + +current.address.geo.lng
        }, 0)
        const longitudeAverage = longitudeSum / users
        return `
             <tr>
                 <td>${users}</td>
                 <td>${latitudeAverage.toFixed(2)}</td>
                 <td>${longitudeAverage.toFixed(2)}</td>
             </tr>
         `
    }

    const generateEmailStats = usersData => {
        const emails = usersData
            .map(user => {
                const { email } = user;
                return email.substring(email.lastIndexOf('.')+1)
            }) 
            .reduce((cumulative, current) => {
                if (!cumulative[current]) {
                
                    cumulative[current] = 1;
                } else {
                    cumulative[current] += 1;
                }
                return cumulative
            },{})
            
            const emailsArray = Object.entries(emails)
            .map(mail => {
                return `
                    <tr>
                    <td>${mail[0]}</td>
                    <td>${mail[1]}</td>
                    </tr>
                `             
            })
            .reduce((cumulative, current) => cumulative + current,'')
            return emailsArray;
            
    }

    
    //renders

    const renderUsersHTML = newHTML => document.getElementById('usersDataTable').innerHTML = newHTML;
    const renderGeoStatsHTML = newStats => document.getElementById('usersGeolocation').innerHTML = newStats;
    const renderEmailStats = emailStats => document.getElementById('emailExtension').innerHTML = emailStats;

    try {
        const usersData = await CollectData('https://jsonplaceholder.typicode.com/users');

        const newHTML = generateHTML(usersData);
        const newStats = generateStats(usersData)
        const emailStats = generateEmailStats(usersData)

        renderUsersHTML(newHTML);
        renderGeoStatsHTML(newStats)
        renderEmailStats(emailStats)

    } catch (error) {
        console.warn(error);
    }


})()