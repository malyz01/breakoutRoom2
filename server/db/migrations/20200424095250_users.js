const table = 'users'
exports.up = (knex) =>
  knex.schema.createTable(table, (t) => {
    t.increments('id').primary()
    t.string('username').unique()
    t.string('email').unique()
    t.string('password')
  })

exports.down = (knex) => knex.schema.dropTable(table)
