const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },  
  startDate: {
    type: Date,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true,
  }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;