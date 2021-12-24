const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const TrakRouter = require('../controllers/trak')
const TrikRouter = require('../controllers/trik')
const UserRouter = require('../controllers/user')
const AktiveRouter = require('../controllers/aktive')

const middleware = app => {
    app.use(cors())
    app.use(morgan("dev"))
    app.use(express.json())
    app.use('/traks', TrakRouter)
    app.use('/triks', TrikRouter)
    app.use('/aktives', AktiveRouter)
    app.use('/users', UserRouter)
}

module.exports = middleware