const mongoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
    const connectionString = process.env.MONGO_URI
    return mongoose.connect(connectionString)
}