const { Schema, model } = require('./connection')

const TrikSchema = new Schema({
    
    // Date of trak logs
    date: {type: Date, required: true},

    // User owning 
    user_id: {type: Schema.ObjectId, required: true}

}, {strict: false, versionKey: false })

const Trik = model("Trik", TrikSchema)

module.exports = Trik