const express = require("express");
const path = require("path");
const fs = require("fs"); // Required to modify JSON file
const port = 8080;

const app = express();

//using this because browsers only support get and post request
//either we can use postman or use a trick to override method in express
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//to get data from req body in post methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//enables rendering ejs files
app.set("view engine", "ejs");

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

//testing server
app.get("/", (req, res) => {
  res.send("welcome to my page");
});

//getting all data in the variable students
const students = require("./data.json");

//route to get details of all students
app.get("/students", (req, res) => {
  res.render("students", { students }); //redering students page
});

//route to add a new student
app.get("/students/add", (req, res) => {
  res.render("studentAdd");
});

app.post("/studentadd", (req, res) => {
  const newStud = req.body;
  // Find the last student's ID and increment it
  const lastStudent = students[students.length - 1];
  newStud.id = lastStudent ? lastStudent.id + 1 : 1;

  students.push(newStud); // Add new student to array

  // Write updated data back to data.json
  fs.writeFile("./data.json", JSON.stringify(students, null, 2), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving data.");
    }

    // Send success message and new student's ID
    res.render("success", { studentId: newStud.id });
  });
});

//route to get details of students with particular ids
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id); // Convert ID to number

  const student = students.find((s) => s.id === studentId); // Search in data
  if (student) {
    res.render("studentDetails", { student }); // Render details page
  } else {
    res.status(404).send("Student not found"); //student id not found in the file
  }
});

//route to edit details of a student using id
app.get('/students/edit/:id', (req, res) =>{
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).send("Student not found");
    }
    
    res.render("editStudent", { student });  // Render an EJS form with pre-filled data
})

app.patch('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
        return res.status(404).send("Student not found");
    }

    // Update only the fields that were sent in the request
    const updatedFields = req.body;
    students[studentIndex] = { ...students[studentIndex], ...updatedFields };

    // Save updated data back to data.json
    fs.writeFile("./data.json", JSON.stringify(students, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error saving data.");
        }
        res.redirect(`/students/${studentId}`);
    });
    
});

//route to delte details of a student using id
app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
      return res.status(404).json({ success: false, message: "Student not found" });
  }

  // Remove student from array
  students.splice(studentIndex, 1);

  // Save updated data back to file
  fs.writeFile("./data.json", JSON.stringify(students, null, 2), (err) => {
      if (err) {
          return res.status(500).json({ success: false, message: "Error deleting student" });
      }
      res.json({ success: true, redirect: "/students" }); // ✅ Return JSON response
  });
});


//listening app at the port
app.listen(port, () => {
  console.log(`Server Live at http://localhost:${port}`);
});