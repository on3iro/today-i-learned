const sqlite3 = require('sqlite3').verbose()
const path = require('path')

console.log(path.join(__dirname, 'til.db'))

const connect = () => {
  return new sqlite3.Database(path.join(__dirname, 'til.db'), sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.log(err.message)
    }

    console.log('Connection to database succesfully established.')
  })
}

module.exports = {
  connect
}
