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

module.exports = {
    getAll   
}