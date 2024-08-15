import { Request, Response } from "express";
import connection from "../libs/database";
import { Product } from "../types";

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const { transaction, customer_name, product, page = 1 } = req.query;

    const limit = 10;
    const offset = (Number(page) - 1) * limit;

    // TODO: Check if the query is valid
    let orderBy = "MAX(t.created_at)";
    if (transaction) {
      orderBy = `total_transaction ${transaction === "desc" ? "DESC" : "ASC"}`;
    } else if (customer_name) {
      orderBy = `customer ${customer_name === "desc" ? "DESC" : "ASC"}`;
    } else if (product) {
      orderBy = `product ${product === "desc" ? "DESC" : "ASC"}`;
    }

    // TODO: Get the data
    const dataSql = `
      SELECT 
        c.id AS id,
        CONCAT(c.firstname, ' ', c.lastname) AS customer,
        p.name AS product,
        c.level,
        SUM(t.price * t.quantity) AS total_transaction,
        SUM(t.quantity) AS total_quantity,
        MAX(t.created_at) AS last_transaction_date
      FROM 
        Transaction t
      JOIN 
        Customer c ON t.customer_id = c.id
      JOIN 
        Product p ON t.product_id = p.id
      WHERE 
        c.is_deleted IS NULL
      GROUP BY 
        t.customer_id, t.product_id
      ORDER BY 
        ${orderBy}
      LIMIT ? OFFSET ?;
    `;

    // TODO: Get the total count
    const countSql = `
      SELECT 
        COUNT(*) AS total_count
      FROM 
        (SELECT 
          t.customer_id, 
          t.product_id
      FROM 
        Transaction t
      JOIN 
        Customer c ON t.customer_id = c.id
      WHERE 
        c.is_deleted IS NULL
      GROUP BY 
        t.customer_id, t.product_id) AS count_query;
    `;

    connection.query(dataSql, [limit, offset], (dataError, results) => {
      if (dataError) throw dataError;

      // TODO: Get the total count
      connection.query(countSql, (countError, countResults: any) => {
        if (countError) throw countError;

        // TODO: Calculate the pagination
        const totalCount = countResults[0].total_count;
        const totalPages = Math.ceil(totalCount / limit);
        const hasNextPage = Number(page) < totalPages;

        res.status(200).json({
          success: true,
          message: "Success",
          data: results,
          pagination: {
            currentPage: Number(page),
            totalPages,
            hasNextPage,
          },
        });
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { quantity } = req.body;
    const { customer_id, product_id } = req.params;

    connection.getConnection((err, connection) => {
      if (err) throw err;

      // TODO: Start the transaction
      connection.beginTransaction((err) => {
        if (err) throw err;

        // TODO: Check if the product exists and has sufficient stock
        const productSql = `SELECT * FROM Product WHERE id = ? LIMIT 1`;
        const productValues = [product_id];

        connection.query(productSql, productValues, (error, productResults) => {
          if (error) {
            return connection.rollback(() => {
              throw error;
            });
          }

          if (Array.isArray(productResults) && productResults.length > 0) {
            const product = productResults[0] as Product;

            if (product.stock < quantity) {
              return connection.rollback(() => {
                res
                  .status(400)
                  .json({ success: false, message: "Insufficient stock" });
              });
            }

            // TODO: Check if the customer exists
            const customerSql = `SELECT * FROM Customer WHERE id = ? LIMIT 1`;
            const customerValues = [customer_id];

            connection.query(
              customerSql,
              customerValues,
              (error, customerResults: any[]) => {
                if (error) {
                  return connection.rollback(() => {
                    throw error;
                  });
                }

                if (customerResults[0].is_deleted) {
                  return connection.rollback(() => {
                    res.status(400).json({
                      success: false,
                      message: "Customer is deleted",
                    });
                  });
                }

                if (
                  Array.isArray(customerResults) &&
                  customerResults.length > 0
                ) {
                  // TODO: Insert the transaction
                  const transactionSql = `INSERT INTO Transaction (price, quantity, customer_id, product_id) VALUES (?, ?, ?, ?)`;
                  const transactionValues = [
                    product.price * quantity,
                    quantity,
                    customer_id,
                    product_id,
                  ];

                  connection.query(
                    transactionSql,
                    transactionValues,
                    (error) => {
                      if (error) {
                        return connection.rollback(() => {
                          throw error;
                        });
                      }

                      // TODO: Decrement the stock & Increment the count_bought
                      const updateStockSql = `UPDATE Product SET stock = stock - ?, count_bought = count_bought + ? WHERE id = ?`;
                      const updateStockValues = [
                        quantity,
                        quantity,
                        product_id,
                      ];

                      connection.query(
                        updateStockSql,
                        updateStockValues,
                        (error) => {
                          if (error) {
                            return connection.rollback(() => {
                              throw error;
                            });
                          }

                          // TODO: Commit the transaction
                          connection.commit((err) => {
                            if (err) {
                              return connection.rollback(() => {
                                throw err;
                              });
                            }
                            res.status(201).json({
                              success: true,
                              message: "Success purchased and stock updated",
                            });
                          });
                        }
                      );
                    }
                  );
                } else {
                  return connection.rollback(() => {
                    res.status(404).json({
                      success: false,
                      message: "Customer not found",
                    });
                  });
                }
              }
            );
          } else {
            return connection.rollback(() => {
              res
                .status(404)
                .json({ success: false, message: "Product not found" });
            });
          }
        });
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
