const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/devbuddy')
  .then(
    () => {
      /* ready to use*/
      console.log('Connected to Mongo');
    },
    err => {
      /* handle initial error */
      console.log('Error connected to mongo' + err);
    }
  );

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
