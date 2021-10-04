const Developer = require('../Models/DeveloperModel')
module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.session.user){
            Developer.findById(req.session.user._id,(err, dev) => {
              dev !== null ? next() : res.status(401).redirect('/developer/login')  
            })
        }
        else{
            res.status(401).redirect('/developer/login')
        }
    },
    
    isNotAuthenticated: (req, res, next) => {
        if (req.session.user){
            return res.redirect('/developer')
        }    
        next()
    }
}