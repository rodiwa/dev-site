const router = require('express').Router()
const EmailModel = require('../model/email.model')

// get all emails
router.route('/list').get((req, res) => {
  EmailModel
    .find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({
      err
    }))
})

// add new email
router.route('/add').post((req, res) => {
  const {
    name,
    email,
    message
  } = req.body
  const newEmail = new EmailModel({
    name,
    email,
    message
  })
  newEmail
    .save()
    .then(created => {
      res.status(201).json({
        status: 'ok'
      })
    })
})

// TODO: future
// mark email as read
// mark email as archive

module.exports = router