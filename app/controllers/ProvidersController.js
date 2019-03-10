const Provider = require('../models/Providers')
const Database = require('../config/database')

// Find all providers
async function getAll(req, res) {
    
    Database.connect();
   
    await Provider.find({})
    .then(providers => {
        if (providers.length) return res.status(200).send(providers)        
        return res.status(204).send('NO CONTENT')
    }).catch(error => res.status(500).send(error))

    // When data is transfer it close the database connecection
    Database.close()        
}

// Find provider(s) for a specific field
function getForField(req, res) {    
    if(req.body.error) return res.status(500).send({error})    
    if(!req.body.providers) return res.status(404).send({message: 'NOT FOUND'})
    let providers = req.body.providers
    return res.status(200).send({providers})
}

// Middleware
async function find(req, res, next) {
    let query = {}
    query[req.params.key] = req.params.value
    //let query = { assignedTo: 87001 }

    console.log('params ', query)

    Database.connect();

    await Provider.find(query)
    .then(providers => {
        if (!providers.length) return next()
        req.body.providers = providers
        return next()
    }).catch(error => {
        req.body.error = error
        next()
    }) 

    // When data is transfer it close the database connecection
    Database.close()
}


module.exports = {
    getAll,
    getForField,
    find   
}