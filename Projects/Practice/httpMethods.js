const http=require('http');
const url=require('url');

const myServer=http.createServer((req,res)=>{
    switch(req.url)
    {
        case "/" : res.end("Welcome to Homepage");
        case "/about" : res.end("Nothing Special Here");
        case "/contact" :
        {
            if(req.method==="GET")res.end("call me anytime");
            else if(req.method==="POST")
            {
                //databse queries.
                res.end("Thik hai bhaiya le liye aapka data");
            }
        }
        default : res.end("Galt jagah aa gye malik");
    }
})

myServer.listen(8080,()=>{
    console.log("Server Started");
})