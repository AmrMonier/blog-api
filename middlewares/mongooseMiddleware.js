const monggoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
    console.log(process.env.MONGO_USER);
    const connectionString = `mongodb://127.0.0.1:27017/blog`
    return monggoose.connect(connectionString)
}