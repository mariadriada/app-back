// Require to work with mongosse
const mongoose = require('mongoose')
// Configuration
const CONFIG = require('./config')

module.exports = {
    connection: null,
    connect: function() {
        // If exists connection return it
        if (this.connection) return this.connection
        // Create connection
        return mongoose.connect(CONFIG.DB)
        .then(connection => {
            this.connection = connection
            console.log('Connection to database sucessfull!')
        }).catch(error => console.log(error))        
    }
}
