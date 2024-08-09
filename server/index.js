const express = require("express");
const port = 5000;
const app = express();

app.use("/",(req,res)=>{
    res.send("fsdfidsfuadsff");
})
app.listen(port,(req,res)=>{
    console.log(`app is listing at port ${port}`);
})