// Require to work with mongoose
const mongoose = require('mongoose')
// Configuration
const CONFIG = require('./config')

module.exports = {
    connection: null,
    // Set database connection
    connect: function() {
        // If exists connection return it
        if (this.connection) return this.connection

        // Create connection       
        mongoose.connect(CONFIG.DB)        
        .then(connection => {
            this.connection = connection
            console.log('Connection to database sucessfull!')              
        }).catch(error => console.log(error)) 

        // Signal to diconected database ok
        mongoose.connection.on('disconnected', () => console.log('Disconnected database!'))
        // return connection object
        return this.connection     
    },    
    //Close database connection
    close: function() {
        mongoose.connection.close(() => process.exit(0))   
    }
}
