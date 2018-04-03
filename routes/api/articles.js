const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.send('this is an article...')
})

module.exports = router
