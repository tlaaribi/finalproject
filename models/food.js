const mongoose=require("mongoose")
const schema=mongoose.Schema

const foodSchema=new schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    quatity:{
       type:Number
    }
})

const Food=mongoose.model("foods",foodSchema)
module.exports=Food

