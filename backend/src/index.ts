import express, { Application } from "express";
import cors from "cors";

import mysqlConnection from "./libs/database";
import productRouter from "./routers/product.router";
import userRouter from "./routers/customer.router";
import transactionRouter from "./routers/transaction.router";

const app: Application = express();
const port: number = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(cors());

mysqlConnection.getConnection((error, connection) => {
  if (error) throw error;
  console.log(`MySQL Connected: ${connection.threadId}`);
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
