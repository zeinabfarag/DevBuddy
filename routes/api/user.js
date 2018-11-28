const express = require('express');
const router = express.Router();
const User = require('../../database/models/user');
const passport = require('../../passport');

router.post('/meetup/:username', (req, res) => {
  User.update(
    { username: req.params.username },
    { $push: { meetups: req.body } }
  )
    .then(function(response) {
      console.log(response);
      res.send('successfully created sample');
    })
    .catch(function(err) {
      console.log(err.message);
      res.send('failed');
    });
});

router.post('/article/:username', (req, res) => {
  User.update(
    { username: req.params.username },
    { $push: { articles: req.body } }
  )
    .then(function(response) {
      console.log(response);
      res.send('successfully created sample');
    })
    .catch(function(err) {
      console.log(err.message);
      res.send('failed');
    });
});

router.post('/', (req, res) => {
  console.log('user signup');

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username })
    .then(user => {
      console.log('user1', user);
      if (user) {
        res.json({ error: 'Sorry, user exists' });
      } else {
        const newUser = new User({
          username: username,
          password: password
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    })
    .catch(err => {
      res.json({ error: err });
    });
});

router.post(
  '/login',
  function(req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

router.get('/', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

module.exports = router;
