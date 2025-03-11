const express=require('express');
const path=require('path');
const fs = require('fs'); // Required to modify JSON file
const port=8080;

const app=express();

//to get data from req body in post methods
app.use(express.urlencoded({extended : true}));
app.use(express.json());

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

//route to add a new student
app.get('/student/add',(req,res)=>{
    res.render("studentAdd");
})




app.post('/studentadd', (req, res) => {
    const newStud = req.body;

    // Find the last student's ID and increment it
    const lastStudent = students[students.length - 1];
    newStud.id = lastStudent ? lastStudent.id + 1 : 1;

    students.push(newStud); // Add new student to array

    // Write updated data back to data.json
    fs.writeFile('./data.json', JSON.stringify(students, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error saving data.");
        }

        // Send success message and new student's ID
        res.render("success", { studentId: newStud.id });
    });
});





//listening app at the port
app.listen(port,()=>{
    console.log(`Server Live at http://localhost:${port}`);
})
