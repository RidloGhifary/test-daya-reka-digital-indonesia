import { body, param } from "express-validator";

export const validateAddCustomer = [
  body("firstname")
    .isString()
    .withMessage("Firstname must be a string")
    .notEmpty()
    .withMessage("Firstname is required"),
  body("lastname")
    .isString()
    .withMessage("Lastname must be a string")
    .notEmpty()
    .withMessage("Lastname is required"),
  body("phone_number")
    .isString()
    .withMessage("Phone number must be a string")
    .notEmpty()
    .withMessage("Phone number is required"),
  body("address").optional().isString().withMessage("Address must be a string"),
  body("level")
    .isIn(["warga", "juragan", "sultan", "konglomerat"])
    .withMessage("Level must be one of: warga, juragan, sultan, konglomerat"),
];

export const validateAddProduct = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a positive number"),
  body("stock")
    .isInt({ gt: -1 })
    .withMessage("Stock must be a non-negative integer"),
  body("count_bought")
    .isInt({ gt: -1 })
    .withMessage("Count bought must be a non-negative integer"),
  body("category")
    .isIn(["beverages", "appetizer", "main_courses", "dessert"])
    .withMessage(
      "Category must be one of: beverages, appetizer, main_courses, dessert"
    ),
];

export const validateAddTransaction = [
  param("customer_id")
    .isInt({ gt: 0 })
    .withMessage("Customer id must be a positive integer"),
  param("product_id")
    .isInt({ gt: 0 })
    .withMessage("Product id must be a positive integer"),
  body("quantity")
    .isInt({ gt: 0 })
    .withMessage("Count must be a positive integer"),
];
