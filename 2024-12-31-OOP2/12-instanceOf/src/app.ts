import axios from "../node_modules/axios/app.js"

async function printUsers() {
    const users = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(users)
}

printUsers()

