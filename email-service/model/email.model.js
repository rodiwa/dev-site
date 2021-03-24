const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema({
  name: String,
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  },
  isArchived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const EmailModel = mongoose.model('EmailModel', emailSchema)

module.exports = EmailModel