const router = require('express').Router()
const db = require('../../db')

const connection = db.connection

router.get('/articles', (req, res, next) => {
  const query = `SELECT * FROM articles`

  connection.serialize(() => {
    connection.all(query, [], (err, rows) => {
      if (err) {
        throw err
      }

      res.json(rows)
    })
  })
})

module.exports = router
