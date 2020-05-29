const router = require('express').Router()
const Profile = require('../db/functions/profiles')

// GET /api/v1/profiles/
router.get('/', (req, res) => {
  Profile.fetchProfiles()
    .then((profiles) => {
      res.status(200).json(profiles)
    })
    .catch((err) => {
      console.log(err.message)
      res.sendStatus(404)
    })
})

// GET /api/v1/profiles/user/:userId
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params
  Profile.fetchUserProfile(userId)
    .then((userProfile) => {
      res.status(200).json(userProfile)
    })
    .catch((err) => {
      console.log(err.message)
      res.sendStatus(404)
    })
})

// PUT /api/v1/profiles/update/:userId
router.put('/update/:userId', (req, res) => {
  const { userId } = req.params
  Profile.updateUserProfile(req.body, userId)
    .then((updatedUserProfileData) => {
      res.status(200).json(updatedUserProfileData)
    })
    .catch((err) => {
      console.log(err.message)
      res.sendStatus(404)
    })
})

// DELETE /api/v1/profiles/delete/:userId
router.delete('/delete/:userId', (req, res) => {
  const { userId } = req.params
  Profile.deleteUserProfile(userId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.sendStatus(404)
    })
})

module.exports = router
