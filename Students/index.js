const express=require('express');
const path=require('path');
const port=8080;

const app=express();

//enables rendering ejs files
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

//testing server
app.get('/',(req,res)=>{
    res.send("welcome to my page");
})

//getting all data in the variable students
const students=require("./data.json");  

//route to get details of all students
app.get('/students',(req,res)=>{
    res.render("students", { students}); //redering students page
})

//route to get details of students with particular ids
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id); // Convert ID to number

    const student = students.find(s => s.id === studentId); // Search in data
    if (student) {
        res.render("studentDetails", { student }); // Render details page
    } else {
        res.status(404).send("Student not found");  //student id not found in the file
    }
});





//listening app at the port
app.listen(port,()=>{
    console.log(`Server Live at http://localhost:${port}`);
})
