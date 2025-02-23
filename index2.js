// const http=require("http");
// const url= require("url");
const express=require("express");


const app= express();
app.get("/",(req,res)=>{
return res.send("it is home page");
});

app.get("/about",(req,res)=>{
    return res.send(`hi ${req.query.name}`);
});

// const myServer=http.createServer(app);
// myServer.listen(8000,()=>console.log("server started"));
app.listen(8000,()=>console.log("server started"));