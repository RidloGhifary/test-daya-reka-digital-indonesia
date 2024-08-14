import { Router } from "express";
import {
  createTransaction,
  getAllTransactions,
} from "../controllers/transaction.controller";
import { validateAddTransaction } from "../validations";
import { validateRequest } from "../middlewares/validation.middleware";

const router: Router = Router();

router.get("/", getAllTransactions);
router.post(
  "/:customer_id/:product_id",
  validateAddTransaction,
  validateRequest,
  createTransaction
);

export default router;
