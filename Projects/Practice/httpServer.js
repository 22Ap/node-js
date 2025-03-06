const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res)=>{
    res.end("Node Server Created");
})

myServer.listen(8000,()=>{
    console.log("server started");
})