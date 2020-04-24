const conn = require('../connection')

const fetchSessions = (db = conn) => {
  return db('sessions').select()
}

const fetchUserSession = (userId, db = conn) => {
  return db('sessions')
    .join('users', 'users.id', 'sessions.user_id')
    .select(
      'users.id',
      'users.username',
      'sessions.duration',
      'sessions.experience',
      'sessions.rating',
      'sessions.focus'
    )
}

module.exports = {
  fetchSessions,
  fetchUserSession
}
