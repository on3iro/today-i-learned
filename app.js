const express = require('express')

const config = require('./config')
const routes = require('./routes')

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello Sandstorm!')
})

app.use(routes)

app.listen(config.port, () => {
  console.log(`Today-I-Learned runnging on ${config.port}`)
})
