const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('data/til.db', (err) => {
  if (err) {
    return console.log(err.message)
  }

  console.log('Connection to database succesfully established.')
})

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS test (info TEST)")

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
})

db.close((err) => {
  if (err) {
    return console.log('Could not close database connection.')
  }

  return console.log('Connection to database succesfully terminated.')
})
