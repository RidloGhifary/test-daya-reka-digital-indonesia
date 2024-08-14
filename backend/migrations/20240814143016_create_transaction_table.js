/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Transaction", (table) => {
    table.increments("id").primary();
    table.integer("customer_id").unsigned().notNullable();
    table.integer("product_id").unsigned().notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.integer("quantity").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("customer_id").references("Customer.id").onDelete("CASCADE");
    table.foreign("product_id").references("Product.id").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Transaction");
};
