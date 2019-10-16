exports.up = function(knex) {
  return knex.schema.createTable("posts", function(table) {
    table.increments();
    table
      .varchar(255)("title")
      .notNullable();
    table.varchar("body").notNullable();
    table.int("user_id").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("posts");
};
