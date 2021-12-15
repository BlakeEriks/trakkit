const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const TrakRouter = require('../controllers/trak')

const middleware = app => {
    app.use(cors())
    app.use(morgan("dev"))
    app.use(express.json())
    app.use('/traks', TrakRouter)
}

module.exports = middleware