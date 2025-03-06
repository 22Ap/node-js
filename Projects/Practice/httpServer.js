const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err)=>{
        switch(req.url){
            case '/' : res.end("welcome to Homepage");
            break;
            case '/about' : res.end("Kya kroge mere bare me jankar");
            break;
            case '/contact' : res.end("Musafir hu yaaro na ghar hai na thikana");
            break;
            default : res.end("galt jagah aa gye malik");
        }
    })
})

myServer.listen(8000,()=>{
    console.log("server started");
})