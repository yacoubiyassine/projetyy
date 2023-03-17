const express=require('express')
const { Register, Login } = require('../controlles/usercontrol')
const { isAuth } = require('../middlewear/isAuth')
const { registerValidator, validation, loginValidator } = require('../middlewear/validation')

const userRoute=express.Router()
userRoute.post('/',registerValidator,validation,Register)
userRoute.post('/login',loginValidator,validation,Login)
userRoute.get('/current',isAuth,(req,res)=>res.send({ user: req.user }))
module.exports=userRoute