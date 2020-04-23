const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const db = require('../db/functions/auth')

passport.use(
  'login',
  new LocalStrategy (
    {
      usernameField: 'username',
      passwordField: 'password',
      session: false
    },
    (username, passport, done) => {
      try{
        db.findUserByusername(username)
      }
    }
  ))


// new LocalStrategy (
//   {
//     usernameField: 'username',
//     passportFeild: 'passpost',
//     session: false
//   },
//   (username, password, done) => {
//   user.findOne({username: username}, function(err, user) { 
//   if(err) { return done(err) }
//   if(!user) {
//     return done(null, false, { message: 'Incorrect username'})
//   }
//   if(!user.validPassword(password)) {
//     return done(null, false, { message: 'Incorrect password.'})
//   }
//   return done(null, user)
//  })