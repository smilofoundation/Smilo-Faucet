require('module-alias/register')

const http = require('http')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const api = require('./api')
const config = require('./config')
const timeout = require('connect-timeout')
const serveStatic = require('serve-static')
const path = require('path')

let app = express()
app.server = http.createServer(app)

app.use(morgan('dev'))

app.use(cors())

//set timeout for all requests 20s
app.use(timeout(20000))

//disable powered by
app.disable('x-powered-by')

app.use('/api', api())

app.use(serveStatic(path.join(__dirname, 'public')))

app.use(function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})


app.server.listen(config.PORT, config.HOST, () => {
  console.log(`Started on port ${JSON.stringify(app.server.address())}`)
})
