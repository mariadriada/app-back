const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({
    // Set data type for will be applied format to find it
    assignedTo: Number,
    employerId: Number,
    createdBy: Number,
    projectedStartDate: Date,
    createdAt: Date,
    updatedAt: Date

})
const Provider = mongoose.model('Provider', ProviderSchema)

module.exports = Provider