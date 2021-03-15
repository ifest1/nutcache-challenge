const mongoose = require('../data/db');
const Employee = require('../schemas/employee');

async function index(req, res) {
  let employees = await Employee.find();
  res.json(employees);
}

async function store(req, res) {
  await Employee.create(req.body);
  res.json({status: 'ok'});
}

async function remove(req, res) {
  const _id = req.params.id;
  await Employee.deleteOne(_id);
  res.json({status: 'ok'});
}

async function update(req, res) {
  const _id = req.params.id;
  console.log(_id, req.body);
  let result = await Employee.findByIdAndUpdate({_id}, req.body);
  console.log(result);
  res.json({status: 'ok'});
}

module.exports = {
  index,
  store,
  remove,
  update
}