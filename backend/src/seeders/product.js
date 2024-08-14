const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "test_daya_reka_digital",
});

const products = [
  { name: "Nasi Goreng", price: 25000, stock: 100, category: "main_course" },
  { name: "Sate Ayam", price: 30000, stock: 50, category: "main_course" },
  { name: "Es Teh Manis", price: 5000, stock: 200, category: "beverage" },
  { name: "Gado-Gado", price: 20000, stock: 30, category: "appetizer" },
  { name: "Kue Cubir", price: 15000, stock: 80, category: "dessert" },
  { name: "Mie Goreng", price: 28000, stock: 60, category: "main_course" },
  { name: "Bakso", price: 22000, stock: 40, category: "main_course" },
  { name: "Kopi Tubruk", price: 7000, stock: 90, category: "beverage" },
  { name: "Pisang Goreng", price: 12000, stock: 70, category: "dessert" },
  { name: "Kerupuk", price: 10000, stock: 120, category: "appetizer" },
];

const seedProducts = async () => {
  try {
    const sql = `
      INSERT INTO Product (name, price, stock, category)
      VALUES (?, ?, ?, ?)
    `;

    for (const product of products) {
      const { name, price, stock, category } = product;
      await new Promise((resolve, reject) => {
        connection.query(sql, [name, price, stock, category], (error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    }

    console.log("Products seeded successfully!");
    connection.end();
  } catch (error) {
    console.error("Error seeding products:", error);
    connection.end();
  }
};

seedProducts();
