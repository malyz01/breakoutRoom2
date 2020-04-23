const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport'),

const server = express()

require('./config/passport')

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(express.static(path.resolve('public')))
server.use(passport.initialize())
server.use(passport.session())


server.use('/api/v1/sessions', require('./routes/sessions'))
server.use('/api/v1/auth', require('./routes/auth'))

module.exports = server
