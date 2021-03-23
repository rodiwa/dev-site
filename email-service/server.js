const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// routes
const emailRouter = require('./routes/email.route')

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

// test
app.get('/', (req, res) => {
  res.send('hello world')
})

// mongoose connection
const MONGOOSE_URI = process.env.MONGOOSE_URI
const MONGOOSE_URI_TEST = process.env.MONGOOSE_URI_TEST
const dbUri = process.env.ENV === 'dev' ? MONGOOSE_URI_TEST : MONGOOSE_URI
mongoose.connect(MONGOOSE_URI_TEST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('Established connection to DB')
})

app.use('/email', emailRouter)

app.listen((port), () => {
  console.log(`Listening to port ${port}`)
})