const conn = require('../connection')
const bcrypt = require('bcrypt')

const authenticate = async (data, db = conn) => {
  try {
    const user = await db('users').where('username', data.username).first()
    if (typeof user === 'undefined') return 'Username does not exists'

    // const isMatch = await bcrypt.compare(data.password, user.password)
    // if (!isMatch) return 'Password does not match'

    return user
  } catch (err) {
    console.log(err.message)
    return 'Authentication - Something went wrong'
  }
}

const newUser = async (data, db = conn) => {
  const { password, confirmPassword, ...username } = data
  try {
    if (password !== confirmPassword) return 'Password does not match'
    let newUser = username
    const hashPassword = await bcrypt.hash(data.password, 10)
    const [id] = await db('users').insert({
      ...newUser,
      password: hashPassword
    })
    return { id, ...newUser }
  } catch (err) {
    console.log(err)
    return 'Username/Email is already taken'
  }
}

module.exports = {
  authenticate,
  newUser
}
