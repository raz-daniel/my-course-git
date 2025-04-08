const express = require('express')

const user = {
    name: 'daniel',
    age: 40,
    email: 'raz.daniel@gmail.com'
}

const logRequest = ( req, res, next) => {
    console.log(`got a ${req.method} request to endpoint ${req.url}`)
    next()
}

const connectToMysql = (req, res, next) => {
    console.log('connecting to mysql...')
    next()
}

const disconnectFromMysql = (req, res, next) => {
    console.log('disconnecting from mysql...')
    next()
}

const connectToMongo = (req, res, next) => {
    console.log('connecting to mongo...')
    next()
}

const printUser = (req, res, next) => {
    res.json(user)
    
}

const saveUser = (req, res, next) => {
    console.log('saved user...')
    res.send('user saved successfully')
    next()
}

const notFound = (req, res, next) => {
    res.status(404)
    res.send('Page Not found... lalala')
}

const sendWelcomeEmail = (req, res, next) => {
    console.log('sending a welcome email')
}

const app = express()

app.use(logRequest)

app.use('/user', connectToMysql)
app.get('/user', printUser)
app.post('/user', saveUser, sendWelcomeEmail)


app.use('/user', disconnectFromMysql)

app.use('/list', connectToMongo)

app.use(notFound)

app.listen(3000, () => console.log('express app started on port 3000...'))

