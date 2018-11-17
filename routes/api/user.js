const express = require('express');
const router = express.Router();
const User = require('../../database/models/user');
const passport = require('../../passport');

router.post('/', (req, res) => {
  console.log('user signup');

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
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

router.get('/auth/github', passport.authenticate('github'), function(
  req,
  res
) {});
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  }
);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  }
);

module.exports = router;
