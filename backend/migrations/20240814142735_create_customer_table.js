/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Customer", function (table) {
    table.increments("id").primary();
    table.string("firstname", 50).notNullable().unique();
    table.string("lastname", 50).notNullable().unique();
    table.string("phone_number", 15).notNullable();
    table.text("address");
    table.timestamp("is_deleted").defaultTo(null);
    table
      .enu("level", ["warga", "juragan", "sultan", "konglomerat"])
      .notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Customer");
};
