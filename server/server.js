const express = require('express')
const path = require('path')
// require('dotenv').config({silent: true})

const dataRoutes = require('./routes/getDataAPI')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/data', dataRoutes)

module.exports = server
