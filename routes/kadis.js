const router = require('express').Router();
const Kadi = require('../models/kadi');
const isAuth=require("../middleware/isAuth")


//add Kadi
router.post("/",isAuth,async(req,res)=>{
  const user=req.user.id
  console.log(user)
 
  const{quantity,creationDate}=req.body
    kadi= new Kadi ({user,quantity,creationDate})
    kadi.save()
res.send({msg:"Kadi registered !", kadi})
});

//delete Kadi
router.delete("/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const  kadi = await Kadi.findOneAndDelete({ _id: id });
        res.json({ msg: "Kadi deleted", kadi});
      } catch (error) {
        console.log(error);
      }
    });

    //update Kadi
    router.put("/:_id", async (req, res) => {
        const { _id } = req.params;
        try {
          const kadi = await Kadi.findOneAndUpdate({ _id }, { $set: req.body });
          res.json({ msg: "Kadi edited", kadi });
        } catch (error) {
          console.log(error);
        }
      });

      //find kadi
      router.get("/", async (req, res) => {
        try {
          const kadi = await Kadi.find();
          res.json({ msg: "Kadi found ! ", kadi });
        } catch (error) {
          console.log(error);
        }
      });

module.exports=router