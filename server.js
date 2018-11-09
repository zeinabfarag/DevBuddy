const express = require('express');
<<<<<<< HEAD
require('dotenv').config()
=======
const path = require('path');
>>>>>>> 81662a308b03f4a9bc872c87d2a82b8811e35394
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/devbuddy');

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
