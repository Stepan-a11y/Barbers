const conDB = require('./conDB');
const User = require('./schemas/users');

let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
      let opts = {}
      opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
      opts.secretOrKey = conDB.secret;
      passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
          User.findOne({id: jwt_payload.sub}, function(err, user) {
              if (err) {
                  return done(err, false);
              }
              if (user) {
                  return done(null, user);
              } else {
                  return done(null, false);
              }
          });
      }));
    };
