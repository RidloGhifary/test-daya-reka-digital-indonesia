import { create } from "zustand";
import axios from "axios";
import { TransactionTable } from "@/types";

interface Transaction {
  success: boolean;
  message: string;
  data: TransactionTable[];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}

interface TransactionsState {
  transactions: Transaction | null;
  order: string;
  fetchTransactions: (order?: string) => Promise<void>;
  setOrder: (order: string) => void;
}

const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/api";

export const useTransactionsStore = create<TransactionsState>((set) => ({
  transactions: null,
  order: "",
  fetchTransactions: async (order = "") => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/transactions?${order}`);
      console.log("🚀 ~ fetchTransactions: ~ data:", data);
      return set({ transactions: data });
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  },
  setOrder: (order: string) => set({ order }),
}));
