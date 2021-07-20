const express= require('express');
const app= express();
var bodyParser = require('body-parser')
var morgan= require('morgan');
var cors= require('cors');

app.get("/", function(req,res){
  res.send("Hellooo, World!!")
});

// app.post("/save-products", (req, res) => {
//
//     console.log(req);
//   console.log("req.body in save-products route: ", req.body);
//   res.send("jai hind!");
// });

app.listen(3000,function(){
  console.log("server is running on port 3000...");
});
