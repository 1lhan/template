const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(express.json({ limit: '25mb' }))

const authController = require('./controllers/authController')

app.use(authController)

app.listen(5000, () => { console.log('server running') })

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('connected to mongodb'))
    .catch(error => console.log(error))