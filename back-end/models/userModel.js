const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:Number,
    name:String,
    role:{type:String,enum:["user","admin"],default:"user"}
})
const collection=mongoose.model('user',userSchema)
module.exports=collection