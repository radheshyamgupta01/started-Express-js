// const express = require("express");
// const app = express();
// const path = require("path");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// const AdminRoutes = require("./Routes/admin");
// const ShopRoutes = require("./Routes/shop");
// app.use("/admin", AdminRoutes);
// app.use(ShopRoutes);
// app.use((req, res) => {
//   res.set(400).sendFile(path.join(__dirname, "./", "Views", "404page.html"));
// });

// app.listen(3000);
// main.js

// const express = require("express");
// const app = express();
// const path = require("path");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// const AdminRoutes = require("./Routes/admin");
// const ShopRoutes = require("./Routes/shop");
// app.use("/admin", AdminRoutes);
// app.use(ShopRoutes);

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "./", "Views", "404page.html"));
// });

// app.listen(3000);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.send("<h1>hello from express<h1/>")
})
app.get("/add-product", (req, res, next) => {
  res.send(` <form method='post' action='/product'>
  <input type='text' id='productName' name='productName' required />
  <button type='submit'>add</button>
  </form>`);
});
app.post("/product",(req,res,next)=>{
  const productName=req.body.productName
  console.log(productName)
  res.send("product added succefully")


})
app.listen(8080, () => {
  console.log(` server is running  in port number 8080`);
});
