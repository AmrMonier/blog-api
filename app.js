require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
    res.send('Server is running')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, (err) => {
    err? console.log(err) : console.log(`App running on http://localhost:${PORT}`);;
})