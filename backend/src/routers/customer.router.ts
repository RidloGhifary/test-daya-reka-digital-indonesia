import { Router } from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/customer.controller";
import { validateAddCustomer } from "../validations";
import { validateRequest } from "../middlewares/validation.middleware";

const router: Router = Router();

router.get("/", getAllUsers);
router.post("/", validateAddCustomer, validateRequest, createUser);
router.patch("/:id", validateAddCustomer, validateRequest, updateUser);
router.delete("/:id", deleteUser);

export default router;
