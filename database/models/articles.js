const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const articlesSchema = new Schema({
  title: { type: String, unique: true, required: false },
  link: { type: String, unique: true, required: false, index: true }
});

module.exports = articlesSchema;
