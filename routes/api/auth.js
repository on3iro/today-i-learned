const router = require('express').Router()
const db = require('../../db')

const connection = db.connection

router.post('/auth', (req, res, next) => {
  const query = `
  `

  connection.serialize(() => {
  })
})

module.exports = router

