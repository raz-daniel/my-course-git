import express from 'express';
import axios from 'axios';
import fs from 'fs/promises';

const loginUsers = async (req, res, next) => {
    try {
        console.log(`connecting to database`)
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        req.users = response.data
        next()
    } catch (error) {
        next(error)
    }
}

const getUsers = async (req, res) => {
    console.log(`displaying users data`)
    res.json(req.users)

}

const loginUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(`connecting to database with id: ${id}`)
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        req.user = response.data
        next()
    } catch (error) {
        // console.log(`404 error: ${req.originalUrl}`)
        // res.status(404).json({message: 'User Not Found'})
        next(error)
    }
}

const getUser = (req, res) => {
    console.log(`display single user data`)
    res.json(req.user)
}

const error = (req, res) => {
    console.log(`404 error: ${req.originalUrl}`)
    res.status(404).json({ message: `Page Not Found` })
}

const errorLogger = async (error, req, res, next) => {
    await fs.appendFile('error.log', `Error ${error.response?.status || 500}: ${error.message} - ${req.method} ${req.path}\n`)
    next(error)
}


const app = express()
app.get('/users', loginUsers, getUsers)
app.get('/users/:id', loginUser, getUser)
app.use((req, res) => error(req, res))
app.use(errorLogger)

app.listen(3000, () => console.log('Congratulation!!! - Server http://localhost:3000/ is now Running'))

