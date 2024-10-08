const mongoose = require('mongoose')

const connectionToDB = () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/user')
        .then( () => console.log( 'Connect to DB' ) )
        .catch( (err) => console.log(err) )
}

module.exports = connectionToDB
