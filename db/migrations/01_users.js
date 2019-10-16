exports.up = function(knex) {
  return knex.schema.createTable("people", function(table) {
    table.increments();
    table
      .varchar(255)("name")
      .notNullable();
    table
      .varchar(255)("email")
      .notNullable();
    table
      .varchar(255)("email")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
