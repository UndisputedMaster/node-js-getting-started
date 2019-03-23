const createError = require('http-errors');
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 5000

var Router = require('./routes/route');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(logger('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use('/', Router)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

