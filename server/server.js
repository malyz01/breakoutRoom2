const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
console.log(path.join(__dirname, 'public'));
server.use(express.static(path.resolve('public')))

module.exports = server
