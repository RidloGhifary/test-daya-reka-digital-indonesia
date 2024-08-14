import { Request, Response } from "express";
import connection from "../libs/database";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const sql = `SELECT * FROM Customer WHERE is_deleted IS NULL`;

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

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, phone_number, address, level } = req.body;

    const sql = `INSERT INTO Customer (firstname, lastname, phone_number, address, level) VALUES (?, ?, ?, ?, ?)`;
    const values = [firstname, lastname, phone_number, address, level];

    connection.query(sql, values, (error) => {
      if (error) throw error;
      res.status(201).json({ success: true, message: "Success created" });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, phone_number, address, level } = req.body;

    const sql = `SELECT * FROM Customer WHERE id = ? LIMIT 1`;
    const values = [id];

    connection.query(sql, values, (error, results: any) => {
      if (error) throw error;

      if (Array.isArray(results) && results.length > 0) {
        const sql = `UPDATE Customer SET firstname = ?, lastname = ?, phone_number = ?, address = ?, level = ? WHERE id = ?`;
        const values = [firstname, lastname, phone_number, address, level, id];

        connection.query(sql, values, (error) => {
          if (error) throw error;

          res.status(200).json({ success: true, message: "Success updated" });
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Customer not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // TODO: check if customer exists
    const sql = `SELECT * FROM Customer WHERE id = ? LIMIT 1`;
    const values = [id];

    connection.query(sql, values, (error, results: any) => {
      if (error) throw error;

      if (Array.isArray(results) && results.length > 0) {
        // TODO: check if customer is deleted
        if (results[0].is_deleted) {
          return res
            .status(404)
            .json({ success: false, message: "Customer already deleted" });
        }

        const sql = `UPDATE Customer SET is_deleted = NOW() WHERE id = ?`;
        const values = [id];

        connection.query(sql, values, (error) => {
          if (error) throw error;
          res.status(200).json({ success: true, message: "Success deleted" });
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Customer not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
