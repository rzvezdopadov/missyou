const express = require('express')
const config = require('config')

const app = express()

app.use(express.json({type: 'application/*json'}))

app.use('/', require('./routes/auth'))

const PORT = config.get('port') || 5000

async function start() {
    try {

    } catch (e) {
        console.log(`Error start server with message: "${e.message}"`)
        process.exit
    }
}

start();

app.listen(PORT, () => {
    console.log(`App started on port: "${PORT}"`)
})