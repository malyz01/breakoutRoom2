const conn = require('../connection')

const fetchSessions = (db = conn) => {
  return db('sessions').select()
}

const fetchUserSession = (userId, db = conn) => {
  return db('sessions').where('user_id', userId).select()
}

module.exports = {
  fetchSessions,
  fetchUserSession
}
