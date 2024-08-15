import { create } from "zustand";
import axios from "axios";

interface Transaction {
  // Define the shape of your transaction object here
  id: string;
  amount: number;
  // Add other fields as necessary
}

interface TransactionsState {
  transactions: any;
  order: string;
  fetchTransactions: (order?: string) => Promise<void>;
  setOrder: (order: string) => void;
}

const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/api";

export const useTransactionsStore = create<TransactionsState>((set) => ({
  transactions: [],
  order: "",
  fetchTransactions: async (order = "") => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/transactions?${order}`);
      set({ transactions: data, order });
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  },
  setOrder: (order: string) => set({ order }),
}));
