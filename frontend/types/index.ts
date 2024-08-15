export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  count_bought: number;
  category: "beverages" | "appetizer" | "main_courses" | "dessert";
  created_at: Date;
  updated_at: Date;
}

export interface Transaction {
  id: number;
  customer_id: number;
  product_id: number;
  price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export interface Customer {
  id: number;
  firstname: string;
  lastname: string;
  phone_number: string;
  address?: string;
  is_deleted?: Date | null;
  level: "warga" | "juragan" | "sultan" | "konglomerat";
  created_at: Date;
  updated_at: Date;
}

export interface TransactionTable {
  customer: string;
  product: string;
  level: "warga" | "juragan" | "sultan" | "konglomerat";
  total_transaction: number;
  total_quantity: number;
  last_transaction_date: Date | string;
}
