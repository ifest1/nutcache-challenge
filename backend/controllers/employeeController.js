const mongoose = require('../data/db');
const Employee = require('../schemas/employee');

async function index(req, res) {
  let employees = await Employee.find();
  res.json(employees);
}

async function store(req, res) {
  let result = await Employee.create(req.body);
  res.json(result);
}

async function remove(req, res) {
  const _id = req.params.id;
  await Employee.deleteOne({_id});
  res.json({status: 'ok'});
}

async function update(req, res) {
  console.log(req.body, req.params);
  const _id = req.params.id;
  let result = await Employee.findByIdAndUpdate({_id}, req.body, {new: true});
  res.json(result);
}

module.exports = {
  index,
  store,
  remove,
  update
}