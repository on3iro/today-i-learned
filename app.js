const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const routes = require('./routes')

const app = express()

const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
}

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(routes)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Today-I-Learned running on ${config.port}`)
})
