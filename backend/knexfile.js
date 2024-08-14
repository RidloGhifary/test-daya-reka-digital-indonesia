const dotenv = require("dotenv");
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: process.env.DATABASE_PASSWORD,
      database: "test_daya_reka_digital",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
