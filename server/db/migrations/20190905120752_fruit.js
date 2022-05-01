exports.up = function (knex) {
  return knex.schema.createTable('employed-people', table => {
    table.increments('id')
    table.string('period')
    table.string('region')
    table.string('employed')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('employed-people')
}
