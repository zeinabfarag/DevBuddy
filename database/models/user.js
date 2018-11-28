const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const bcrypt = require("bcryptjs");
const articlesSchema = require("./articles");
const jobsSchema = require("./jobs");
const meetupsSchema = require("./meetups");
=======
const bcrypt = require('bcryptjs');
const articlesSchema = require('./articles');
const meetupsSchema = require('./meetups');
>>>>>>> 94ea84be61f200c4ed83b8b545ad4d1a86e7d8ea

mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  articles: [articlesSchema],
  meetups: [meetupsSchema]
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
