const mongooseConnection = require('./middlewares/mongooseMiddleware.js')
mongooseConnection()
.then(() => {
    require('dotenv').config()
    const express = require('express')
    const cors = require('cors')
    const bodyParser = require('body-parser')
    const exhbs = require('express-handlebars')
    

    const app = express()
    
    app.engine('.hbs', exhbs({extname: '.hbs'}))
    app.set('view engine', '.hbs')

    

    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.get('/', (req, res, next) => {
        res.render('index')
    })
    
    const PORT = process.env.PORT || 5000
    app.listen(PORT, (err) => {
        err? console.log(err) : console.log(`App running on http://localhost:${PORT}`);;
    })
})
.catch(e => console.log(e))