/*
* CRUD Provider controller 
* Note: 
* The specialties, are seting from SpecialiesController after to find()
*/

const Provider = require('../models/Providers')
const Database = require('../config/database')


// Find all providers
async function getAll(req, res) {    
    Database.connect();

    //await Provider.find({}).deepPopulate('specialty').exec()
    await Provider.find()
    .then(providers => {  
        if (providers.length) return res.status(200).send(providers)        
        return res.status(204).send('NO CONTENT')
    }).catch(error => res.status(500).send(error))
    
    // When data is transfer it close the database connecection
    Database.close()        
}

// Find provider(s) for a specific field
function getForField(req, res) {   
    // close the database connecection
    Database.close()     
   
    const error = req.body.error;
    if(req.body.error) return res.status(500).send({error})    
    if(!req.body.providers) return res.status(404).send({message: 'NOT FOUND'})
    let providers = req.body.providers
    return res.status(200).send({providers})   
}

// Create a provider
async function create(req, res) {
    Database.connect();

    let provider = new Provider(req.body)
    console.log('provider ', provider)
    await provider.save()
    .then(provider => res.status(201).send({provider}))
    .catch(error => res.status(500).send({error}))

    // When provider is created it close the database connecection
    Database.close()     
}

// Update data provider
async function update(req, res) {
    const error = req.body.error;
    if(req.body.error) return res.status(500).send({error})
    if(!req.body.providers) return res.status(404).send({message: 'NOT FOUND'})

    let provider = req.body.providers[0]
    provider = Object.assign(provider, req.body)
    await provider.save()
        .then(product => res.status(200).send({message: 'UPDATED', provider}))
        .catch(error => res.status(500).send({error}))

    // close the database connecection
    Database.close() 
}

//Delete one provider
async function remove(req, res) {   
    const error = req.body.error;
    if(req.body.error) return res.status(500).send({error})   
    if(!req.body.providers) return res.status(404).send({message: 'NOT FOUND'})
    
    // Delete the first item
    await req.body.providers[0].remove()    
        .then(provider => res.status(200).send({message: 'REMOVED', provider}))
        .catch(error => res.status(500).send({error}))
        
    // When provider is created it close the database connecection
    Database.close()  
}

// Middleware
function find(req, res, next) {
    let query = {}
    query[req.params.key] = req.params.value

    Database.connect();
    
    Provider.find(query)
    .then(providers => {
        if (!providers.length) return next()
        req.body.providers = providers
        return next()
    }).catch(error => {
        req.body.error = {message: 'Find error', error}
        next()
    }) 
}

module.exports = {
    getAll,
    getForField,
    create,
    update,
    remove,
    find  
}