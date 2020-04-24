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


// GET - /api/v1/sessions/:userId
router.get('/:userId', async (req, res) => {
  try {
    const userSessions = await Session.fetchUserSession(req.params.userId)
    res.status(200).json(userSessions)
  } catch (err) {
    console.log(err)
  }
})

// POST - /api/v1/sessions/:userId/new
// router.post('/api/v1/sessions/:userId/new', (req, res) => {
//   try {
//     const 
//   } catch (err) {
    
//   }
// })

module.exports = router
