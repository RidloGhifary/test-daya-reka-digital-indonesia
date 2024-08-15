const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

const customers = [
  {
    firstname: "Budi",
    lastname: "Santoso",
    phone_number: "08123456789",
    address: "Jakarta",
    email: "budi.santoso@example.com",
    level: "warga",
  },
  {
    firstname: "Siti",
    lastname: "Rahayu",
    phone_number: "08123456780",
    address: "Bandung",
    email: "siti.rahayu@example.com",
    level: "juragan",
  },
  {
    firstname: "Agus",
    lastname: "Pratama",
    phone_number: "08123456781",
    address: "Surabaya",
    email: "agus.pratama@example.com",
    level: "sultan",
  },
  {
    firstname: "Dewi",
    lastname: "Kusuma",
    phone_number: "08123456782",
    address: "Yogyakarta",
    email: "dewi.kusuma@example.com",
    level: "konglomerat",
  },
  {
    firstname: "Rudi",
    lastname: "Hartono",
    phone_number: "08123456783",
    address: "Semarang",
    email: "rudi.hartono@example.com",
    level: "warga",
  },
  {
    firstname: "Ayu",
    lastname: "Lestari",
    phone_number: "08123456784",
    address: "Bali",
    email: "ayu.lestari@example.com",
    level: "juragan",
  },
  {
    firstname: "Andi",
    lastname: "Wijaya",
    phone_number: "08123456785",
    address: "Medan",
    email: "andi.wijaya@example.com",
    level: "sultan",
  },
  {
    firstname: "Rina",
    lastname: "Sari",
    phone_number: "08123456786",
    address: "Makassar",
    email: "rina.sari@example.com",
    level: "konglomerat",
  },
  {
    firstname: "Eka",
    lastname: "Saputra",
    phone_number: "08123456787",
    address: "Palembang",
    email: "eka.saputra@example.com",
    level: "warga",
  },
  {
    firstname: "Tini",
    lastname: "Amelia",
    phone_number: "08123456788",
    address: "Malang",
    email: "tini.amelia@example.com",
    level: "juragan",
  },
];

const seedCustomers = async () => {
  try {
    const sql = `
      INSERT INTO Customer (firstname, lastname, phone_number, address, email, level)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    for (const customer of customers) {
      const { firstname, lastname, phone_number, address, email, level } =
        customer;
      await new Promise((resolve, reject) => {
        connection.query(
          sql,
          [firstname, lastname, phone_number, address, email, level],
          (error) => {
            if (error) reject(error);
            else resolve();
          }
        );
      });
    }

    console.log("Customers seeded successfully!");
    connection.end();
  } catch (error) {
    console.error("Error seeding customers:", error);
    connection.end();
  }
};

seedCustomers();
