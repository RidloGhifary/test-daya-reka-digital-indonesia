import { body } from "express-validator";

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
