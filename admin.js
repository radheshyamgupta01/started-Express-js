// //  const express=require("express")
// //  const path=require("path")
// // //  const rootDir=require("../util/path")
// //  const router=express.Router()
// // router.get("/add-product", (req, res) => {
  
// //     // res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
// //     res.send("<form action='/product' method='post'> <input type='text' name='title'/> <button>ADD</button></form>")
    
// //   });
// //   router.post('/product', (req, res, next) => {
// //     console.log(req.body);
// //     res.redirect("/");
// // });

// //   module.exports=router;
// // admin.js

// const express = require("express");
// const path = require("path");
// const router = express.Router();
// const fs = require("fs");
//   // res.sendFile(path.join(__dirname,'../','Views','shop.html'));

// router.get("/add-product", (req, res) => {
//    res.sendFile(path.join(__dirname,"../","Views","add-product.html"))
// });

// router.post('/product', (req, res, next) => {
//     fs.writeFile("test.txt", JSON.stringify(req.body), (err) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Internal Server Error");
//         }
//         console.log("Data written to file");
//         res.redirect("/");
//     });
// });

// module.exports = router;


// module.exports = router;
 const express=require("express")
 const router=express.Router()
 router.get("/",(req,res)=>{
    res.send("you or on the admin page ")
 })
 router.get("/d",(req,res)=>{
    res.send("<h1>you or on the dashbord  page</h1> ")
 })
  module.exports=router