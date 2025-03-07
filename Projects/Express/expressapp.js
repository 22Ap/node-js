const http=require('http');
const fs=require('fs');
const url=require('url');
//above all three are optional, express imports them by own
const express=require('express');

const app=express();
const PORT = 8000;
const hostname= "0.0.0.0"

//app.use can be used to handle both get and post requests
app.use('/details',(req,res)=>{
    res.send(`<h1>Anupam Kumar</h1>
        <ul>
            <li>Age: 22</li>
            <li>weight: 67</li>
            <li>UID: 21BCS9660</li>
            <li>Semester: 8th</li>
        </ul>`
    )
    //either use template literals, or use strings for each line and concatenate them
})
app.get('/',(req,res)=>{
    return res.send("Hello from Anupam's Home Page");
})
//res.send is used to send http respones

app.get('/about',(req,res)=>{
    return res.send("Jyada Puch tachh nahi Beta");
})

app.get('/contact',(req,res)=>{
    return res.send("Bhagle !, jyada chipakna nahi hai");
})

app.get('/fruit',(req,res)=>{
    res.send({
        name : "mango",
        color : "yellow",
        season : "summer",
        price : "100 rs/kg"
    });
})

app.listen(PORT,hostname,()=>{
    console.log(`Server running at http://${hostname}:${PORT}/`);
})