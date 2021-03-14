const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },  
  
  img_url: {
    type: String,
    required: true,
  },
  news_url: {
    type: String,
    required: true,
  }
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = EmployeeSchema;