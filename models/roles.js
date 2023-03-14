const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Candidate = require('./candidates')

const roleSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  candidates: [{
    type: Schema.Types.ObjectId,
    ref: 'Candidate',
    required: false
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Role', roleSchema)
