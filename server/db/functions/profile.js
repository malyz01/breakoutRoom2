const conn = require('../connection')

const deleteById = (id, db = conn) => {
  console.log('deleting by id')
  console.log(id)
  return db('users')
    .where('id', id)
    .del()
    .catch((err) => {
      console.log(err)
      return 'data base Err'
    })
}

const updateById = (data, id, db = conn) => {
  return db('profiles')
    .where('user_id', id)
    .update(data)
    .catch((err) => {
      console.error(err)
      return 'data base Err'
    })
}

const getProfileById = (id, db = conn) => {
  return db('profiles')
    .where('user_id', id)
    .select()
    .first()
    .catch((err) => {
      console.log(err)
      return 'Data base Err'
    })
}

module.exports = {
  deleteById,
  updateById,
  getProfileById
}
