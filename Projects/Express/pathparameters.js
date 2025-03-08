const port=8080;
const host='0.0.0.0';
const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send("ka ho kaisan ba");
});

//username our id path parmaters hai query strings nahi
app.get('/:username/:uid',(req,res)=>{
    console.log(req.params);    //gives parameters of request.
    res.send(`Hello ${req.params.username} your uid is ${req.params.uid}`);
});  //: is used for variables

app.listen(port,host,()=>{
    console.log(`server running at http://${host}:${port}`);
})