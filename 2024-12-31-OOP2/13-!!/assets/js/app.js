import axios from "../node_modules/axios/index.js";
async function printUsers() {
    const users = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(users);
}
printUsers();
