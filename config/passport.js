const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    (payload, done) => {
      User.findById(payload._doc._id)
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((error) => {
          return done(error, false);
        });
    }
  )
)

function authenticateUser(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return next(err)
    }

    if (!user) {
      return res.status(401).json({ message: 'No estás autorizado para hacer esta accion' })
    }

    req.user = user
    next()
  })(req, res, next)
}

module.exports =  authenticateUser 