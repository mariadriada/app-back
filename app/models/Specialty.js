const mongoose = require('mongoose')

const SpecialtySchema = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId,  
    name: String,
    createdBy: Number,
    createdAt: Date,
    updatedBy: Number,
    updatedAt: Date,
    count: Number
})
const Specialty = mongoose.model('Specialty', SpecialtySchema)

module.exports = Specialty