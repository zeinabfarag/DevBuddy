const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const sampleSchema = new Schema({
  firstname: { type: String, unique: false, required: false },
  lastname: { type: String, unique: false, required: false }
});

module.exports = sampleSchema;
