const http=require("http");
const fs=require("fs");
const url=require("url");
// const myServer=http.createServer((req,res)=>{
//     // if(res.url ==="/favicon.ico") return res.end();
//     const log= `${Date.now()}: ${req.url} new request received\n`;
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl)
//     fs.appendFile("./content.txt",log,(err,data)=>{
//         // console.log("hello from server");
//         switch(myUrl.pathname){
//             case '/':
//                 res.end("home page");
//                 break;
//                 case '/about':
//                     const username=myUrl.query.myname;
//                     res.end(`hi,${username}`);
//                     break;
//                     case '/contact':
//                         res.end("9877878");
//                         break;
//                         default :
//                         res.end("404");
//         }

//     })
// })
// myServer.listen(8000,()=>console.log("server start"));

const myServer=http.createServer((req,res)=>{
    const log= `${Date.now()} ${req.url}: New request received\n`;
    const Myurl=url.parse(req.url,true);
    console.log(Myurl);
    fs.appendFile("./log.txt",log,(err,data)=>{
        console.log("helllo from server");
        switch(Myurl.pathname){
            case '/':
                res.end("home page");
                break;
                case '/about':
                    const username=Myurl.query.myname;
                    res.end(`hi ${username}`);
                    break;
                    case '/contact':
                        res.end("phone number");
                        break;
                        default:
                            res.end("404");
        }
    })

})
myServer.listen(8000,()=>console.log("server started"));


