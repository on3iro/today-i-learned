const router = require('express').Router()
const db = require('../../db')

router.get('/articles', (req, res, next) => {
  const connection = db.connect()

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
