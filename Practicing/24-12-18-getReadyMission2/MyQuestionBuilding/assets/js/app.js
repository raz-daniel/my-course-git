'use strict';

(() => {

    const collectData = url => fetch(url).then(respond => respond.json());

    const generateHairTableHTML = data => {
        const { users } = data;
        const newHairTable = users.
            map(user => {
                const { hair: { color, type } } = user
                return `
                <tr>
                    <td>${color}</td>
                    <td>${type}</td>
                </tr>
                `
            }).join('')
        return newHairTable
    }

    const renderHairTableHTML = newHTML => document.getElementById('usersHairTable').innerHTML = newHTML;

    const generateHairStatsHTML = data => {
        const { users } = data
        const noneUniqueHairStats = users.map(user => {
            const {hair: {type}} = user
            console.log(type)
            return type
        })
        return noneUniqueHairStats
    }

    const renderHairStatsHTML = hairStatsHTML => document.getElementById('hairStatsTable').innerHTML = hairStatsHTML

    document.getElementById('displayUserHairTable').addEventListener('click', async () => {
        try {
            const usersData = await collectData('https://dummyjson.com/users')
            const hairTableHTML = generateHairTableHTML(usersData)
            renderHairTableHTML(hairTableHTML)
        } catch (error) {
            console.warn(error)
        }
    })

    document.getElementById('displayHairStatsTable').addEventListener('click', async () => {
        try {
            const usersData = await collectData('https://dummyjson.com/users')
            const hairStatsHTML = generateHairStatsHTML(usersData)
            renderHairStatsHTML(hairStatsHTML)
        } catch (error) {
            console.warn(error)
        }

    })

})()