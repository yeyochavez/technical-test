const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: Date,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  degree: {
    type: Number,
    required: true,
  },
  dateEntry: {
    type: Date,
    default: Date.now
  },
}); 

module.exports = mongoose.model("Student", studentModel);
