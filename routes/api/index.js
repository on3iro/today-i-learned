const router = require('express').Router()

const articles = require('./articles')
const auth = require('./auth')

router.use('/', articles, auth)

module.exports = router
