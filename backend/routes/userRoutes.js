const express=require("express")
let {register,login,logout,cart,forgotPassword,resetPassword}  = require('../controllers/userController')

let verify_token = require('../middleware/userVerification')

let router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/cart',verify_token,cart)

router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);

module.exports=router