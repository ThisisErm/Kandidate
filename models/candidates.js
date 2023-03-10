const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = new Schema({
    fullName: {
     type: String,
     required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    LinkedInProfile: {
        type: String,
        required: true
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