exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employed-people').del()
    .then(function () {
      // Inserts seed entries
      return knex('employed-people').insert([
        // {
        //   period: "2019-05-31",
        //   region: "Auckland Region",
        //   employed: "721535",
        // }
      ])
    })
}
