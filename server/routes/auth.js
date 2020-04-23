const router = require('express').Router()
const passport = require('passport')


// Passport will respond with a 401 if auth fails
router.post('/', 
passport.authenticate('local'), (req, res) => {
  // sucess
})

module.exports = router
