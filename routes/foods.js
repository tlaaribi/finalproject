const router = require('express').Router();
const Food=require("../models/food");
const isAuth=require("../middleware/isAuth")
const isAdmin=require("../middleware/isAdmin")

//add food
router.post("/",isAuth,isAdmin,async(req,res)=>{
    const {name,description,price,quantity}=req.body
    let food=await Food.findOne({name})

    if(food){
     return res.send({msg:"food already exist!"})
    }
    food= new Food({name,description,price,quantity})
food.save()
res.send({msg:"food registered !",food})
});




//delete food
router.delete("/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const  food = await Food.findOneAndDelete({ _id: id });
        res.json({ msg: "food deleted", food});
      } catch (error) {
        console.log(error);
      }
    });

    //update food
    router.put("/:_id", async (req, res) => {
        const { _id } = req.params;
        try {
          const food = await Food.findOneAndUpdate({ _id }, { $set: req.body });
          res.json({ msg: "food edited", food });
        } catch (error) {
          console.log(error);
        }
      });

      //find food
      router.get("/", async (req, res) => {
        try {
          const food = await Food.find();
          res.json({ msg: "food found ! ", food });
        } catch (error) {
          console.log(error);
        }
      });

      //readone

module.exports=router