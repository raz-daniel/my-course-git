import express from "express"
import config from "config"
import sequelize from "./db/sequelize"

const port = config.get<string>('app.port')
const name = config.get<string>('app.name')

const app = express()

async function runServer() {
    try {
        await sequelize.sync()
        console.log('Database reset successfully')
        
        app.listen(port, () => {
            console.log(`${name} started on port ${port}`)
        })
    } catch (error) {
        console.log('Error resetting database', error)
    }
}

runServer()

