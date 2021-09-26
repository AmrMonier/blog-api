const monggoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
    console.log(process.env.MONGO_USER);
    const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.d2fsw.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
    return monggoose.connect(connectionString)
}