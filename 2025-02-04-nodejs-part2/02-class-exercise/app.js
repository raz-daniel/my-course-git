const express = require('express');
const axios = require('axios');
const { toXML } = require('jstoxml')

const server = express()

const getData = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        req.users = response.data
        next()
    } catch (error) {
        next(error)
    }

}

const filterData = (req, res, next) => {
    if (req.query.search) {
        req.users = req.users.filter(({ name }) => name.includes(req.query.search))
    }
    next()
}

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'text/xml')
        return res.send(toXML(req.users))
    }
    return res.json(req.users)
}

const errorLogger = (err, req, res, next) => {
    res.status(500).send(err.toString())
}

server.get('/user', getData, filterData, respond, errorLogger)


server.listen(3000, () => console.log('Server Start!'))

