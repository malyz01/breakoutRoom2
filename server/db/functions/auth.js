const conn = require('../connection')

module.exports ={
  findUserByusername
}

function findUserByusername (username, db = conn){
  return db('users')
    .where('username', username)
    .first()
    .select()
}