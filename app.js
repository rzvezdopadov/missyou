const express = require('express')
const config = require('config');
const mongoose = require('mongoose');

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use('/', require('./routes/auth'))

const PORT = config.get('port') || 5000

async function startServer() {
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`App started on port: "${PORT}"`)
        })
    } catch (e) {
        
    }
}

startServer()

