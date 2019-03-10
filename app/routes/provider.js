const express = require('express')
const ProviderCtr = require('../controllers/ProvidersController')

const Router = express.Router()

Router.get('/', ProviderCtr.getAll)  // Get all providers

module.exports = Router