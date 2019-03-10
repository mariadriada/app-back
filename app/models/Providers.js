const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({})
const Provider = mongoose.model('Provider', ProviderSchema)

module.exports = Provider