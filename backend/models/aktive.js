const { Schema, model } = require('./connection')

const AktiveSchema = new Schema({
    
    // User owning trak
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },

    traks: {
        type: Schema.Types.Mixed,
        default: {}
    }

}, { versionKey: false, minimize: false })

const Aktive = model("Aktive", AktiveSchema)

module.exports = Aktive