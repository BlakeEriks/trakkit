mongoose = require('./connection')

const TrakSchema = new mongoose.Schema({
    date: {type: Date, required: true, unique: true},
    sleep: {
        duration: {type: Number},
        wakeupTime: {type: Date},
    },
    hydration: {
        quantity: Number,
        units: String   
    },
    expenses: [
    {
        damage: Number,
        category: String
    }
    ],
    exercise: [
    {
        duration: Number,
        category: String
    }
    ],
    reading: [
    {
        duration: Number,
        content: String
    }
    ]
}, {strict: false})

const Trak = mongoose.model("Trak", TrakSchema)

module.exports = Trak