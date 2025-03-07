const http=require('http');
const fs=require('fs');
const url=require('url');

const PORT = 8000;
const hostname= "0.0.0.0"
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end;
    const log=`${Date.now()}:${req.url} New Req Received\n`;
    const myUrl=url.parse(req.url,true);    //true for parseQuery String
    console.log(myUrl);    
    fs.appendFile("log.txt", log, (err)=>{
        switch(myUrl.pathname){
            case '/' : res.end("welcome to Homepage");
            break;
            case '/about' : 
            const userName=myUrl.query.myName;
            res.end("Kya kroge mere bare me jankar, "+userName+"?");
            break;
            case '/contact' : res.end("Musafir hu yaaro na ghar hai na thikana");
            break;
            default : res.end("galt jagah aa gye malik");
        }
    })
})

myServer.listen(PORT,hostname,()=>{
    console.log("server started");
    console.log(`Server running at http://${hostname}:${PORT}/`);
})