const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const articlesSchema = new Schema({
  title: { type: String, unique: false, required: false },
  link: { type: String, unique: false, required: false }
});

module.exports = articlesSchema;
