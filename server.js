var express = require('express')
  , fs = require('fs')
  , path = require('path')
  , html = require('./page')

  const app = express()

  app.use('/', express.static(`${__dirname}/dist`))

  app.get('/', function(req, res) {
    console.log('sending html')
    res.send(html)
  })
  const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000
  const webServer = app.listen(port, () => {
    console.log(`Application running on port ${port}`)
  })
