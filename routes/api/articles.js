const router = require('express').Router()
const db = require('../../db')

const connection = db.connection

router.get('/articles', (req, res, next) => {
  const query = `
    SELECT
      articles.id,
      title,
      body,
      users.name as authorName
    FROM articles
    INNER JOIN users on users.id = articles.authorId
  `

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
