import axios from "axios";

const SERVER_URL = process.env.SERVER_URL;

interface Props {
  transaction?: string;
  customer_name?: string;
}

export default async function getTransactions({
  transaction,
  customer_name,
}: Props = {}) {
  let query = "";

  if (transaction) {
    query = `?transaction=${transaction}`;
  }

  if (customer_name) {
    query = `?customer_name=${customer_name}`;
  }

  const { data } = await axios.get(`${SERVER_URL}/transactions${query}`);
  return data;
}
