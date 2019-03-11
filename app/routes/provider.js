const express = require('express')
const ProviderCtr = require('../controllers/ProvidersController')
const SpecialtyCtr = require('../controllers/SpecialtiesControllers')


const Router = express.Router()

Router
    // Get all providers
    .get('/', ProviderCtr.getAll)

    // Find provider(s) for a specific field
    .get('/:key/:value',    ProviderCtr.find, 
                            SpecialtyCtr.getSpecialties, 
                            ProviderCtr.getForField) 
    //Create a new provider
    .post('/', ProviderCtr.create) 

    // Update providers
    .put('/:key/:value',    ProviderCtr.find, 
                            ProviderCtr.update)
    //Delete a provider
    .delete('/:key/:value', ProviderCtr.find, 
                            ProviderCtr.remove) 
    

module.exports = Router