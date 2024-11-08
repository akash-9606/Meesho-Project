let jwt = require('jsonwebtoken')
let User = require('../models/userModel')

let verify_token = async (req,res,next) =>{
   
    let token = req.header('Authorization')
    if(token){
        try{
            let payload = jwt.verify(token, process.env.SECRET_KEY)
            let user = await User.findById(payload._id)
            req.user = user
            next()
        }
        catch{
            res.status(401).send('Invalid Token!')
        }
    }else{
        res.status(401).send('Invalid Token!!')
    }
} 

module.exports = verify_token