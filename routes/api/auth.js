const router = require('express').Router()
const db = require('../../db')

const connection = db.connection

router.post('/auth', (req, res, next) => {
  const { name, password } = req.body

  const query = `
    SELECT
      id,
      password
    FROM users
    WHERE users.name = ?
  `

  connection.serialize(() => {
    connection.all(query, [name], (err, rows) => {
      if (err) {
        return res.status(500).send('An internal server error occured')
      }

      const hasRow = rows.length

      if (hasRow && rows[0].password === password) {
        return res.json({ id: rows[0].id, name })
      }

      return res.status(401).json({ msg: 'Wrong username and/or password.' })
    })
  })
})

module.exports = router

