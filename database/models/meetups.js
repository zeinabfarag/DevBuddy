const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const meetupsSchema = new Schema({
  title: { type: String, unique: false, required: false },
  link: { type: String, unique: false, required: false }
});

module.exports = meetupsSchema;
