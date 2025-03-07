const http=require('http');
const fs=require('fs');
const url=require('url');
const express=require('express');

const app=express();
const port=8080;

//app.use can be used to handle both get and post requests
app.get('/',(req,res)=>{
    return res.send("Hello from Home Page");
})

app.get('/about',(req,res)=>{
    return res.send("Jyada Puch tach nahi");
})

app.get('/contact',(req,res)=>{
    return res.send("Bhagle !, jyada chipakna nahi hai");
})

app.listen(port,()=>{
    console.log("Hello World");
})