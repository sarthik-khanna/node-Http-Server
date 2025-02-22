// const http= require("https");

// const myServer=http.createServer((req,res)=>{
//     console.log("new Request received");
//     res.end("hello from server");
// });
// const port=8000;
// myServer.listen(port, ()=>console.log("server started"));

const http= require("http");
const fs=require("fs");


 const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url}req received\n`;
    fs.appendFile("./log.txt",log,(err,data)=>{
switch(req.url){
case '/':res.end("home page");
break;
case '/about' : res.end("i am sarthik khanna");
break;
case '/contact': res.end("99879798");
break;
default: res.end("404");
}
        // res.end("hello from server");
    });
 });

 myServer.listen(8000,()=>console.log("server start"));