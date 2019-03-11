const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const ProviderSchema = new mongoose.Schema({      
    firstName: {
        type: String,
        required: true
    },   
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },    
    /*         
        It was not possible applied the "populate()" method, 
        because the data of specialty is fill all in this collection
        //specialty: { type: Schema.Types.ObjectId, ref: "Specialty" }, 
        Instead to this, are filled whit a middleware the items through _id.
        The fields in the moment to a specific find
    */
    specialty: {        
        _id: Schema.Types.ObjectId,
        name: String,
        createdBy: Number,
        createdAt: Date,
        updatedBy: Number,
        updatedAt: Date,
    },
    projectedStartDate: {
        type: Date,
        required: true
    },
    employerId: {
        type: Number,
        required: true
    },
    providerType: {
        type: String,
        required: true
    },
    staffStatus: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdBy: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedBy: Number,
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}) 


const Provider = mongoose.model('Provider', ProviderSchema)

module.exports = Provider