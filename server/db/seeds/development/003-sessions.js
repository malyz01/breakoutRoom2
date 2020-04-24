const table = 'sessions'
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex(table)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(table).insert([
        {
          id: 1,
          user_id: 1,
          duration: 10,
          experience: 'was pretty dumb tbh, ngl',
          rating: 0,
          focus: 'just trying it out'
        },
        {
          id: 2,
          user_id: 1,
          duration: 11,
          experience:
            'wow  sensei Uy taught me so many things, amazing teacher reccommended',
          rating: 5,
          focus: 'giving it another shot'
        },
        {
          id: 3,
          user_id: 2,
          duration: 51,
          experience: 'This is goiing to be fun',
          rating: 5,
          focus: 'focusing on all the methods I know'
        },
        {
          id: 4,
          user_id: 3,
          duration: 11,
          experience:
            'I meditated for the first time in my life, it was an ok experience I guess.',
          rating: 3,
          focus: 'is this fun?'
        },
        {
          id: 5,
          user_id: 3,
          duration: 15,
          experience:
            'so I tried meditating again, and I am so happy I gave it another shot, master Uy is the best yoga teacher ever',
          rating: 5,
          focus: 'focusing on my inner self'
        },
        {
          id: 6,
          user_id: 4,
          duration: 4,
          experience: 'yea dis do be kinda fire',
          rating: 5,
          focus: 'focusing on my soul my friend, soul'
        },
        {
          id: 7,
          user_id: 5,
          duration: 1,
          experience: 'meeditatng iz soooo boringz',
          rating: 0,
          focus: 'LAAAMEEE!!!'
        }
      ])
    })
}
