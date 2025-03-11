const express=require('express');
const port=8080;
const host='0.0.0.0';

const app=express();
app.use(express.urlencoded({extended : true})); //Parses form data from req.body
//extended true helps in parsing nested objects and arrays
app.use(express.json());    //parses json data


//req.params = getting data from routes, like username/profilepages/productpages.
//req.query = getting data from url query parameters, like username and password, fruit colr and name.
app.get('/register',(req,res)=>{
    let {user,password}=req.query;  //get requests do not have a body
    res.send(`Coming through GET : Welcome ${user} the password you enterd is : ${password}`);
});

app.post('/register',(req,res)=>{
    let {user,password}=req.body;   //req.body is used in case of post and put
    res.send(`Coming through POST : Welcome ${user} the password you enterd is : ${password}`);
});


app.listen(port,host,()=>{
    console.log(`server started at http://${host}:${port}`);
});





/*
Method	    Where Data Comes From	    Example URL	Example             Output
req.body	Form data / JSON (POST/PUT)	(form submission)	            { username: 'John', password: '12345' }
req.params	Dynamic route parameters	/profile/johndoe	            { username: 'johndoe' }
req.query	Query string parameters	    /search?category=electronics&price=1000	{ category: 'electronics', price: '1000' }
*/