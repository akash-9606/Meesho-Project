const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer=require("nodemailer")
const User = require("../models/userModel")
let Cart = require('../models/cart')

//signup logicsss
let register = async (req, res) => {
    try {
        let { usertype, name, email, password } = req.body

        let salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)

        let user = new User({ usertype, name, email, password })

        await user.save()
        res.send({ status: 'success', user })
    } catch (error) {
        res.send({ status: 'failed', message: error.message })
    }
}

let login = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await User.findOne({ "email": email })
        if (!user) {
            return res.status(400).json({ status: 'failed', message: 'User not found' });
        }
        

        let isValidPwd = await bcrypt.compare(password, user.password)
        if (!isValidPwd) {
            res.status(400).json({ status: 'failed', message: 'password not valid' })
        }else {
            let payload = { _id: user._id }
            jwt.sign(payload, process.env.KEY, async(err, token) => {
                if (err) throw err
                let UserCart = await Cart.findOne({userId:user.id})
                // user.token = token
                res.status(201).json({ status: 'success', message: 'Loggedin successfully', user,token, UserCart })
            })

        }
    } catch (error) {
        res.send({ status: 'failed', message: error.message })
    }
}

let logout = async (req,res) =>{
    res.json({ status:'success', message: 'Logged out successfully' });
}

let cart = async (req,res) =>{
    res.json(req.user)
}

// forgotPssword logicsssss
let forgotPassword=async(req,res)=>{
    const {email}=req.body
    try{
        const user=await User.findOne({email})
        if(!user){
            res.send({message:"user not registered"})
        }
        
        const token=jwt.sign({id:user._id}, process.env.KEY, { expiresIn: "10m" })

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akashkolaki5@gmail.com',
              pass: 'tesr xusy etrh hdvv'
            }
          });
          
          let mailOptions = {
            from: 'akashkolaki5@gmail.com',
            to: email,
            subject: 'Reset password',
            text: `http://localhost:3000/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message:"error sending email"})
            } else {
                return res.json({ status:true,message:"email sent"})
            }
          });


    }catch(err){
        console.log("error",err)
    }
}

let resetPassword=async(req,res)=>{
    const {token}=req.params
    const {password}=req.body
    try{
        const decoded=await jwt.verify(token,process.env.KEY)
        const id=decoded.id
        const hashPassword=await bcrypt.hash(password,10)
        await User.findByIdAndUpdate({_id:id},{password:hashPassword})
        return res.json({status:true,message:"updated password"})
    }catch(err){
        console.log("invalid token")
    }
}
module.exports = { login, register,logout,cart,forgotPassword,resetPassword }
