
'use strict';

(() => {

    const user = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    document.getElementById('user').addEventListener('click', () => {

        userFunc(user)


    })

    const userFunc = user => {

        for (const prop in user) {
            console.log(`user[prop] ${user[prop]}`)
            console.log(`prop ${prop}`)
            if (typeof user[prop] !== "object") console.log(prop)
            else userFunc(user[prop])
        }

    }

})()
