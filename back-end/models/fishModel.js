const mongoose=require('mongoose')
const fishSchema=new mongoose.Schema({
      type:String,
      imageUrl:String,
      prix:Number
})
const fishModel=mongoose.model('fishe',fishSchema)
module.exports=fishModel
