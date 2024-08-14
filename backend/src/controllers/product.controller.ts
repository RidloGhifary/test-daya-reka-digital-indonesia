import { Request, Response } from "express";
import connection from "../libs/database";

export const getAllProducts = (req: Request, res: Response) => {
  try {
    const sql = `SELECT * FROM Product`;
    connection.query(sql, (error, results) => {
      if (error) throw error;

      res
        .status(200)
        .json({ success: true, message: "Success", data: results });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
