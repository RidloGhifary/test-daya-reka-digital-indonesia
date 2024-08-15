import axios from "axios";

const SERVER_URL = process.env.SERVER_URL;

export default async function getTransactions() {
  const { data } = await axios.get(`${SERVER_URL}/transactions`);
  return data;
}
