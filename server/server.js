const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.resolve('public')))

server.use('/api/v1/sessions', require('./routes/sessions'))
server.use('/api/v1/auth', require('./routes/auth'))
server.use('/api/v1/profiles', require('./routes/profiles'))

module.exports = server
