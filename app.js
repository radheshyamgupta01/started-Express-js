
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>homepage</h1>");
});

const adminRoute = require("./Routes/admin");
app.use("/ram", adminRoute);
 const shopRout=require("./Routes/shop")
 app.use("/shop",shopRout)

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(9090, () => {
  console.log(`Running on port 9090`);
});
