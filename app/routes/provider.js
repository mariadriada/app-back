const express = require('express')
const ProviderCtr = require('../controllers/ProvidersController')

const Router = express.Router()

Router
    // Get all providers
    .get('/', ProviderCtr.getAll)  
    // Find provider(s) for a specific field
    .get('/:key/:value', ProviderCtr.find, ProviderCtr.getForField) 
    
    
module.exports = Router