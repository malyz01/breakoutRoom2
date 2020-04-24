const router = require('express').Router()
const Profile = require('../db/functions/profile')

// DELETE /api/v1/profile/delete/:id
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Profile.deleteById(id)
    .then((dbRes) => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.sendStatus(404)
    })
})

// PUT /api/v1/profile/update/:id
router.put('/update/:id', (req, res) => {
  const data = res.body
  const id = req.params.id
  Profile.updateById(data, id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.sendStatus(404)
    })
})

// GET /api/v1/profiles/
// router.get('/', (req, res) => {
//   profile
//     .getProfiles()
//     .then((dbRes) => {
//       res.json(dbRes)
//     })
//     .catch((err) => {
//       res.sendStatus(404)
//     })
// })

router.get('/:id', (req, res) => {
  const id = req.params.id
  Profile.getProfileById(id)
    .then((dbRes) => {
      res.json(dbRes)
    })
    .catch((err) => {
      res.sendStatus(404)
    })
})

module.exports = router
