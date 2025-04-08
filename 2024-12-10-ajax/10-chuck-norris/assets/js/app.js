"use strict";

(async () => {

    const getData = async url => {
        return fetch(url).then(response => response.json())
    }

    const generateHTML = joke => `<span>${joke.value}</span>`

    const renderHTML = newHTML => document.getElementById('lineHere').innerHTML = newHTML

    const DisplayChuckNorrisJoke = async () => {
        try {

            // get data
            const joke = await getData('https://api.chucknorris.io/jokes/random')

            // generate html
            const newHTML = generateHTML(joke)

            // render html
            renderHTML(newHTML)



        } catch (e) {
            console.warn(e)
        }
    }


    document.getElementById('button').addEventListener('click', () => {

        setInterval(DisplayChuckNorrisJoke, 2000)
    })

})()


