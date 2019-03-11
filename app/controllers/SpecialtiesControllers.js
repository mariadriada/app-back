const Specialty = require('../models/Specialty')


// Get Specialties (Middleware)
async function getSpecialties(req, res, next) {   

    //console.log(req.body.providers)
    if(req.body.error) return res.status(500).send({error})    
    if(!req.body.providers) return res.status(404).send({message: 'NOT FOUND'})

    // If the item not have specialty, go to next function
    if (!req.body.providers[0].specialty) next()

    // Fill data of specialties in case are clean
    req = await fill(req)    

    next()  
}

// Fill specialties that there are not set
async function fill(req) {
    for (let i=0; i<req.body.providers.length; i++) {

        let id = req.body.providers[i].specialty._id
        
        await Specialty.findById(id, (error, specialty) => { 
            
            if (error) return req.body.error = {message: 'Error setting specialty'}           
           
            if( typeof req.body.providers[i].specialty.name === 'undefined' ) {              
                // Set especialty            
                req.body.providers[i].specialty.name = specialty.name
                req.body.providers[i].specialty.createdBy = specialty.createdBy
                req.body.providers[i].specialty.createdAt = specialty.createdAt
                req.body.providers[i].specialty.updatedBy = specialty.updatedBy
                req.body.providers[i].specialty.updatedAt = specialty.updatedAt
            }
        })
    }
    return req
}



module.exports = {
    getSpecialties,
}