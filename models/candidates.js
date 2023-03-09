const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
    candidate: {
     type: String,
     required: true
    },
    dateFrom: {
        type: String,
        required: true
    },
    dateTo: {
        type: String
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const Candidate = mongoose.model('Candidate', candidateSchema)

module.exports = Candidate