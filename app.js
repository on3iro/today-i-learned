const express = require('express')
const config = require('./config')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Sandstorm!')
})

app.listen(config.port, () => {
  console.log(`Today-I-Learned runnging on ${config.port}`)
})
