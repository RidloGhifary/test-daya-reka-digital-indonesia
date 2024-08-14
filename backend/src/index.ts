import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT || 3000);

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
