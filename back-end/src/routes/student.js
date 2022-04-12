const express = require("express");
const studentModel = require("../models/student");
const router = express.Router();

// create student
router.post("/students", (req, res) => {
  const student = studentModel(req.body);
  student
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

// get all students
router.get("/students/", (req, res) => {
  studentModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

// get all students by degree
router.get("/students/degree/:degree", (req, res) => {
  const { degree } = req.params;
  studentModel
    .find({
      degree: degree,
    })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error }));
});

module.exports = router;
