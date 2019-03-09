const connectionString = require('./connectionString')

module.exports ={
    PORT: process.env.PORT || 3000,    
    DB: process.env.DB || connectionString
}
