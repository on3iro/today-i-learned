const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./data/til.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.log(err.message)
  }

  console.log('Connection to database succesfully established.')
})

const query = `SELECT * FROM users WHERE Name = ?`
const name = 'Theo'

db.serialize(() => {
  db.all(query, [name], (err, rows) => {
    if (err) {
      throw err
    }

    rows.forEach((row) => {
      console.log(row)
    })
  })
})

db.close((err) => {
  if (err) {
    return console.log('Could not close database connection.')
  }

  return console.log('Connection to database succesfully terminated.')
})
