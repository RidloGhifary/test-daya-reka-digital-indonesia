import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export default mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "test_daya_reka_digital",
});
