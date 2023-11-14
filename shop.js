
 const express=require("express")
 const router=express.Router()
 router.get("/",(req,res)=>{
  res.send("<h1>this is shop main page <h1/>")
 })
router.get("/shop-p",(req,res)=>{
  res.send("<h1> this is shpoing cart </h1>")

})
module.exports=router