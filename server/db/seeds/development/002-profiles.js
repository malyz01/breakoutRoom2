const table = 'profiles'
exports.seed = (knex) =>
  knex(table)
    .del()
    .then(() =>
      knex(table).insert([
        {
          id: 1,
          user_id: 1,
          firstname: 'first',
          lastname: 'test',
          age: 20,
          bio: 'developer test 1'
        },
        {
          id: 2,
          user_id: 2,
          firstname: 'second',
          lastname: 'test',
          age: 19,
          bio: 'developer test 2'
        }
      ])
    )
