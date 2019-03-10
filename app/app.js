const express = require('express');
const bodyParser = require('body-parser');

const App = express()
const Provider = require('./routes/provider')

// Accept json format
App.use(bodyParser.json())
// Request only json
App.use(bodyParser.urlencoded({extended:false}))
// Set URL to provider
App.use('/provider', Provider)

module.exports = App