const { Schema, model } = require('./connection')

const FieldSchema = new Schema({

    // field name
    name: {type: String, required: true},

    // Ex number, string
    type: {type: String, required: true}
    
}, { _id: false, default: []})

const TrakSchema = new Schema({
    
    // User owning trak
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },

    // Hydration, Exercise, Sleep
    name: {type: String, required: true},

    // Duration, Quantity
    type: {type: String, required: true},

    // Emoji for frontend button
    emoji: {type: String, required: true, maxLength: 5},

    // Additional fields like exercise type or reading content
    fields: [FieldSchema]

}, { versionKey: false })

const Trak = model("Trak", TrakSchema)

module.exports = Trak