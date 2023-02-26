const mongoose=require("mongoose")
const schema=mongoose.Schema

const kadiItemsSchema =new schema({
    quantity:{
        type:Number
    },
    food:{
        type:String
    }

});
const kadiSchema=new schema({
    items:[kadiItemsSchema],

    user: { type: schema.Types.ObjectId, ref: 'User' },
    quantity:{type:Number},

    creationDate:{
       type:Date,
       default:Date.now()
    },
   
})

const Kadi=mongoose.model("kadis", kadiSchema)
module.exports=Kadi