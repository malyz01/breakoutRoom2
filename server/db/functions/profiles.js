const conn = require('../connection')

const fetchProfiles = (db = conn) => {
  return db('profiles').select()
}

const fetchUserProfile = (id, db = conn) => {
  return db('profiles').where('user_id', id).select().first()
}

const updateUserProfile = (data, userId, db = conn) => {
  return db('profiles')
    .where('user_id', userId)
    .update(data)
    .then(() => {
      return db('profiles').where('user_id', userId).select().first()
    })
}

const deleteUserProfile = (userId, db = conn) => {
  return db('profiles').where('user_id', userId).del()
}

module.exports = {
  fetchProfiles,
  fetchUserProfile,
  updateUserProfile,
  deleteUserProfile
}
