import { Router } from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getSpecificUser,
  getAllUsersDeleted,
  searchUserByName,
} from "../controllers/customer.controller";
import { validateAddCustomer } from "../validations";
import { validateRequest } from "../middlewares/validation.middleware";

const router: Router = Router();

router.get("/", getAllUsers);
router.get("/search", searchUserByName);
router.get("/deleted", getAllUsersDeleted);
router.get("/:id", getSpecificUser);
router.post("/", validateAddCustomer, validateRequest, createUser);
router.patch("/:id", validateAddCustomer, validateRequest, updateUser);
router.delete("/:id", deleteUser);

export default router;
