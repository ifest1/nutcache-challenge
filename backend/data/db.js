const mongoose = require('mongoose');

const password = process.env.DB_PASSWORD
const username = process.env.DB_USERNAME
const database = process.env.DB_NAME


const uri = `mongodb+srv://${username}:${password}@cluster0.ijhgp.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => console.log(err));

module.exports = {
  mongoose: mongoose
}