const table = 'profiles'
exports.seed = (knex) =>
  knex(table)
    .del()
    .then(() =>
      knex(table).insert([
        {
          id: 1,
          user_id: 1,
          firstname: 'Raymond',
          lastname: 'Leung',
          age: 21,
          bio: 'looking for a calm time'
        },
        {
          id: 2,
          user_id: 2,
          firstname: 'Don',
          lastname: 'Smith',
          age: 19,
          bio: 'AKL Dev Academy Teacher'
        },
        {
          id: 3,
          user_id: 3,
          firstname: 'Chris',
          lastname: 'Alba',
          age: 21,
          bio: 'gold 1 BABY!!!'
        },
        {
          id: 4,
          user_id: 4,
          firstname: 'Lucas',
          lastname: 'SantaClaus',
          age: 20,
          bio: 'what is a bio?'
        },
        {
          id: 5,
          user_id: 5,
          firstname: 'lil',
          lastname: 'timmy',
          age: 91,
          bio: 'hehehe, stole mommis credeet cardz '
        }
      ])
    )
