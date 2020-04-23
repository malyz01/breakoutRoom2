const table = 'users'
exports.seed = (knex) =>
  knex(table)
    .del()
    .then(() =>
      knex(table).insert([
        {
          id: 1,
          username: 'test1',
          password: '1234'
        },
        {
          id: 2,
          username: 'test2',
          password: '123'
        }
      ])
    )
