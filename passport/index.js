const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../database/models/user');
const GithubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const config = require('../oauth');

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log('*** serializeUser called, user: ');
  console.log(user); // the whole raw user object!
  console.log('---------');
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called');
  User.findOne({ _id: id }, 'username', (err, user) => {
    console.log('*** Deserialize user, user:');
    console.log(user);
    console.log('--------------');
    done(null, user);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

// GitHub Strategy
passport.use(
  new GithubStrategy(
    {
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            name: profile.displayName,
            created: Date.now()
          });
          user.save(function(err) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              done(null, user);
            }
          });
        }
      });
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL
    },
    function(request, accessToken, refreshToken, profile, done) {
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            name: profile.displayName,
            created: Date.now()
          });
          user.save(function(err) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              done(null, user);
            }
          });
        }
      });
    }
  )
);

module.exports = passport;
