const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const queries = require('./queries.js');
const newStudent = {
    first_name: 'Ol Man', 
    last_name: 'Withers', 
    prior_occupation: 'Master Pervert', 
    hometown: 'Misfit Island'
};

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res, next) => {
    queries.getAll()
        .then((studentData) => {
            res.json({studentData});
        })
            .catch(next)
})

app.get('/:id', (req, res, next) => {
    queries.getStudentById(parseInt(req.params.id))
        .then((studentById) => {
            res.json({studentById});
        })
            .catch(next);
})

app.post('/', (req, res, next) => {
    console.log(req.body);
    queries.addStudent(req.body)
        .then((newStudentData) => {
            res.status(201).json({newStudentData});
        })
            .catch(next);
})

app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(400).send("Not found bisch");
});

module.exports = app;
