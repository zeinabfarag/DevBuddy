const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const config = require('../oauth');

passport.use(
  new GithubStrategy(
    {
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile);
      });
    }
  )
);
