require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const inicializaMongoServer = require('./src/config/db')
const routes = require('./src/routes')

inicializaMongoServer()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(5000, ()=> {
    console.log('rodou')
})
