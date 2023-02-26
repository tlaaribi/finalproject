//import express
const express=require("express")
const connectDB=require("./config/connectDB")

const app=express()
app.use(express.json())
connectDB()

app.use("/api/auth",require("./routes/auth"))
app.use("/api/food",require("./routes/foods"))
app.use("/api/kadi",require("./routes/kadis"))

const port=5001
 app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
 })
