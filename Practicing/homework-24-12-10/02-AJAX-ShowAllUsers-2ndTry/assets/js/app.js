'use strict';
(() => {

    const collectData = async url => {
        return fetch(url).then(data => data.json());
    }

    const generateHTML = users => {
        const usersHTML = users
            .map(user => {
                const { name, username, email, phone, address: { city, street, zipcode }, company } = user;
                return `
            <tr>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${city}</td>
                <td>${street}</td>
                <td>${zipcode}</td>
                <td>${company.name}</td>
            </tr>
            `
            })
            .join('')
        return usersHTML;
    }

    const renderUsersHTML = usersHTML => {
        document.getElementById('usersInfoTable').innerHTML = usersHTML;
    }

    const generateLocationHTML = users => {
        //find number of users (length)
        const numberOfUsers = users.length;
        // sum latitude & longitude (verify its a number) and divide in length
        const averageLatitude = users.reduce((cum, user) => {
            const { address: { geo: { lat } } } = user
            return cum + +lat
        }, 0) / numberOfUsers;

        const averageLongitude = users.reduce((cum, user) => {
            const { address: { geo: { lng } } } = user
            return cum + +lng
        }, 0) / numberOfUsers;
        //return ready to render as string
        return `
            <tr>
                <td>${numberOfUsers}</td>
                <td>${averageLatitude.toFixed(2)}</td>
                <td>${averageLongitude.toFixed(2)}</td>
            </tr>
        `
    }

    const renderLocationHTML = usersLocation => {
        document.getElementById('locationStatsTable').innerHTML = usersLocation;
    }

    const generateEmailsHTML = users => {
        const emailStats = users
            .reduce((cumulative, user)=>{
                const {email} = user;
                const emailExtension = email.slice(email.lastIndexOf('.'));
                const existExtension = cumulative.find(item => item.emailExtension === emailExtension);
                if (!existExtension) {
                    cumulative.push({
                        emailExtension,
                        usersNum: 1
                    })
                } else {
                    existExtension.usersNum += 1;
                }
                return cumulative;
            },[])
            .map(stats => {
                const {emailExtension, usersNum} = stats
                return `
                    <tr>
                        <td>${emailExtension}</td>
                        <td>${usersNum}</td>
                    </tr>
                `
            })
            .join('')
        return emailStats;
    }

    const renderEmailHTML = emailsHTML => {
        document.getElementById('emailsStatsTable').innerHTML = emailsHTML;
    }

    const onload = async () => {
        try {
            const data = await collectData('https://jsonplaceholder.typicode.com/users');
            const usersHTML = generateHTML(data);
            renderUsersHTML(usersHTML)

            const usersLocation = generateLocationHTML(data);
            renderLocationHTML(usersLocation);

            const emailsHTML = generateEmailsHTML(data);
            renderEmailHTML(emailsHTML)
        } catch (error) {
            console.warn(error)
        }
    }

    onload()

})()