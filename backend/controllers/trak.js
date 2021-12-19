const express = require('express')
const Trak = require('../models/trak')
const TrakRouter = express.Router()

TrakRouter.get('/', async (req,res) => {
    const { userId } = req.query

    if (!userId) {
        res.status(400).json("User id required to get traks")
    }
    else {
        res.json(await Trak.find({user_id: userId}))
    }
})

TrakRouter.post('/', (req,res) => {
    const { userId } = req.query

    if (!userId) {
        res.status(400).json("User id required to get traks")
        return
    }
    req.body.user_id = userId

    Trak.create(req.body, (err,trak) => {
        if (err) {
            console.log(err)
            res.status(400).json("Failed to create Trak")
            return
        }
        res.json(trak)
    })
})

TrakRouter.put('/:id', async (req,res) => {
    Trak.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, trak) => {
        if (err || !trak) {
            res.status(400).json("Failed to update trak")
        }
        else {
            res.json(trak)
        }
    })
})

TrakRouter.delete('/', (req,res) => {
    Trak.deleteMany({}, err => {
        if (err) console.log(err)
        else res.json('Cleared Trak collection.')
    })
})

TrakRouter.delete('/:id', (req,res) => {
    Trak.deleteOne({id: req.params.id}, err => {
        if (err) {
            res.status(400).json("Failed to delete trak")
        }
        else {
            res.json('Delete Trak ' + req.params.id)
        }
    })
})

module.exports = TrakRouter