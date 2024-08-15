import { CreateCustomerFormData } from "@/components/form/AddCustomerForm";
import axios from "axios";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/api";

export default async function createCustomer(data: CreateCustomerFormData) {
  try {
    await axios.post(`${SERVER_URL}/customers`, data);
  } catch (error) {
    throw error;
  }
}
