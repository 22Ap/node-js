const port=8080;
const host="0.0.0.0";
const express=require('express');
const app=express();

app.set("view engine","ejs");   //setting view engine

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.get('/rolldice',(req,res)=>{
    let randNumber=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceNumber:randNumber});
})  //diceNumber is key and randNumber is value;

//agar key aur value variable dono ka name same rakhe to bas ek hi likhne ka jaruruat hai
// app.get('/rolldice',(req,res)=>{
//     let diceNumber=Math.floor(Math.random()*6)+1;
//     res.render("rolldice.ejs",{diceNumber});
// })  //diceNumber is key and value both;

app.get('/insta/:username',(req,res)=>{
    let {username}=req.params;
    res.render("insta.ejs",{username});
});//we can omit .ejs extension while rendering

app.listen(port,host,()=>{
    console.log(`server started at http://${host}:${port}`);
})
