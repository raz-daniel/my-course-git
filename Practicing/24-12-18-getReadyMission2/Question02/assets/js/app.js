'use strict';
(() => {

    const collectData = url => fetch(url).then(data => data.json())

    const generateUsersTableHTML = users => {
        const newTable = users.map(user => {
            const {name, email, address: {city, geo: {lat}}, company: {name: compName}} = user
            return `
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${city}</td>
                <td>${Number(lat).toFixed(2)}</td>
                <td>${compName}</td>
            </tr>
            `
        }).join('')
        return newTable

    }

    const renderUsersTableHTML = newHTML => document.getElementById('usersTable').innerHTML = newHTML

    document.getElementById('displayUsers').addEventListener('click', async () => {

        try {
            const data = await collectData('https://jsonplaceholder.typicode.com/users')
            const usersTableHTML = generateUsersTableHTML(data);
            renderUsersTableHTML(usersTableHTML)
        } catch (error) {
            console.warn(error)
        }


    })

    const generateEmailStatsHTML = users => {
        //first part - map a unique set of suffixes
        const nonUniqueEmails = users.map(user => {
            let {email} = user
            email = email.substring(email.lastIndexOf('.')+1)
            return email
        })
        
        const uniqueSet = new Set (nonUniqueEmails)
        const uniqueEmails = [...uniqueSet]
            
        console.log(uniqueEmails)
                
        // second part - map again to an objects with count

        const suffixesArrayOfObjects = uniqueEmails.map(suffix => {
            const SuffixObject = {
                suffix,
                count: nonUniqueEmails.filter(email => email === suffix).length
            }
            return SuffixObject
            
        })

        //third part - map into html table
        const generateTableHTML = suffixesArrayOfObjects.map(suffixObj => {
            const {suffix, count} = suffixObj
            return `
            <tr>
                <td>${suffix}</td>
                <td>${count}</td>
            </tr>
            `
        })

        const final = generateTableHTML.join('')
        return final
    }



    const renderEmailStats = EmailStatsHTML => document.getElementById('emailsTable').innerHTML = EmailStatsHTML

    document.getElementById('displayEmailStats').addEventListener('click', async () => {
        try {
            const data = await collectData('https://jsonplaceholder.typicode.com/users')
            const EmailStatsHTML = generateEmailStatsHTML(data)
            renderEmailStats(EmailStatsHTML)    
        } catch (error) {
            console.warn(error)
        }
        
    })

})()