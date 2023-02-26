const mongoose=require("mongoose")
const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
    type:String
    },
    isAdmin:{
      type:Boolean ,
      default:false 
    }
})

const User=mongoose.model("users",userSchema)
module.exports=User 

