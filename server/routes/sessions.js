const router = require('express').Router()
const Session = require('../db/functions/sessions')

// GET - /api/v1/sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.fetchSessions()
    res.status(200).json(sessions)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
