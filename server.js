const App = require('./app/app')
const CONFIG = require('./app/config/config')

App.listen(CONFIG.PORT, (error) => {
    if (error) return console.log(error)
    console.log('Server running in port: ', CONFIG.PORT)
})