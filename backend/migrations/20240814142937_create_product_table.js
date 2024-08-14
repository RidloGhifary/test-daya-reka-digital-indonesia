/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Product", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("stock").notNullable();
    table.integer("count_bought").defaultTo(0);
    table
      .enu("category", ["beverage", "appetizer", "main_course", "dessert"])
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
  return knex.schema.dropTable("Product");
};
