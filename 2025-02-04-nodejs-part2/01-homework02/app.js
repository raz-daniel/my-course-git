const express = require('express');
const axios = require('axios');
const fs = require ('fs/promises');

const server = express()

const getUsers = async (req, res, next) => {
    try {
        console.log('Connecting to server to get USERS!')
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        console.log('Displaying USERS!')
        res.json(response.data)
    } catch (err) {
        next(err)
    }

}

const getUser = async (req, res, next) => {
    try {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${req.query.id}`)
        res.json(response.data)
    } catch (err) {
        next(err)
    }

}

const notFound = (req, res, next) => {
    res.status(404).send('Page Not Found')
}

const errorLogger = async (err, req, res, next) => {
    await fs.appendFile('./error.log', err)
}

server.get('/users',)
server.get('/user', getUser)
server.use(notFound)

server.use(errorLogger)

server.listen(3000, () => console.log('Started...'))