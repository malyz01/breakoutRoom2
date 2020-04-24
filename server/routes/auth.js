const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Auth = require('../db/functions/auth')

// path - /api/v1/auth/logout
router.get('/logout', (req, res) => {
  res.json({})
})

// POST - /api/v1/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const auth = await Auth.authenticate(req.body)
    if (typeof auth === 'string' || auth instanceof String)
      return res.status(404).json(auth)
    const { id, username } = auth
    const token = jwt.sign({ id, username }, 'secrettttt')
    res.status(200).json({ id, username, token })
  } catch (err) {
    console.log(err)
    res.json('Login - Something went wrong')
  }
})

// POST - /api/v1/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const user = await Auth.newUser(req.body)
    if (typeof user === 'string' || user instanceof String)
      return res.status(404).json(user)
    const token = jwt.sign(user, 'secrettttt')
    res.status(200).json({ ...user, token })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
