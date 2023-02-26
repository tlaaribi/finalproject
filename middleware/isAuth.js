const User=require("../models/user")
var jwt = require('jsonwebtoken');
const isAuth=async(req,res,next)=>{
const token=await req.headers["authorization"]
if(!token){
   return res.send({msg:"No token!"})
}

const decoded=await jwt.verify(token,"kklt")

const user=await User.findById(decoded.id)
if(!user){
  return res.send({msg:"user does not exist"})
}
req.user=user

next()


}

module.exports=isAuth