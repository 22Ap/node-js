const port=8080;
const host='0.0.0.0';
const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("ka ho kaisan ba");
});

app.get('/search',(req,res)=>{
    console.log(req.query);    //gives query parameters of request.
    res.send(`you searched for ${req.query.fruit} whose color is ${req.query.color}`);
})//?fruit=mango&color=yellow

app.listen(port,host,()=>{
    console.log(`server running at http://${host}:${port}`);
})