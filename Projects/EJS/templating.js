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
    const avail=[1,2,3,4,5,6];  //is array ko hi bhej rhe ejs me
    res.render("rolldice.ejs",{diceNumber:randNumber,avail});
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

app.get('/anista/:username',(req,res)=>{
    let {username}=req.params;
    const anistadata=require('./data.json') //it loads everytime this route is accessed
    //for better performnace we can move it at top if file does not changes frequently;
    const data=anistadata[username];
    if (!data) {
        return res.status(404).send("User not found!");
    }//dealing with users who are not present in databse
    res.render("anista",{data});
})

app.listen(port,host,()=>{
    console.log(`server started at http://${host}:${port}`);
})
