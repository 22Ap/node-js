const http=require('http');
const fs=require('fs');
const PORT = 8000;
const hostname= "0.0.0.0"
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
    res.end("Node Server Created By Great Anupam Ji 😊");
})

myServer.listen(PORT,hostname,()=>{
    console.log("server started");
    console.log(`Server running at http://${hostname}:${PORT}/`);
})