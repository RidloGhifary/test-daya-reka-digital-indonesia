"use client";

import { tableHead } from "@/constants";
import { TransactionTable } from "@/types";
import { PiCaretUpDown } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { MdPersonSearch } from "react-icons/md";
import Button from "@/components/ui/Button";
import convertRupiah from "@/utils/formatRupiah";
import { useRouter } from "next/navigation";
import { useTransactionsStore } from "@/hooks/useTransactionsStore";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface CustomerTableProps {
  datas: TransactionTable[] | [];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}

export default function CustomerTable({
  datas,
  pagination,
}: CustomerTableProps) {
  const { fetchTransactions, setOrder } = useTransactionsStore();
  const router = useRouter();

  const [transactionOrder, setTransactionOrder] = useState<string>("desc");
  const [customerOrder, setCustomerOrder] = useState<string>("desc");

  const handleSwitchOrderByTotalTransaction = async () => {
    try {
      if (transactionOrder === "desc") {
        setTransactionOrder("asc");
      } else {
        setTransactionOrder("desc");
      }
      const order = `transaction=${transactionOrder}`;
      setOrder(order);
      await fetchTransactions(order);
      router.refresh();
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  const handleSwitchOrderByCustomer = async () => {
    try {
      if (customerOrder === "desc") {
        setCustomerOrder("asc");
      } else {
        setCustomerOrder("desc");
      }
      const order = `customer_name=${customerOrder}`;
      setOrder(order);
      await fetchTransactions(order);
      router.refresh();
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  const handleNextPage = async () => {
    try {
      if (pagination.hasNextPage) {
        const order = `page=${pagination.currentPage + 1}`;
        setOrder(order);
        await fetchTransactions(order);
        router.refresh();
      } else {
        return;
      }
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  const handlePreviousPage = async () => {
    try {
      if (pagination.currentPage > 1) {
        const order = `page=${pagination.currentPage - 1}`;
        setOrder(order);
        await fetchTransactions(order);
        router.refresh();
      } else {
        return;
      }
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  return (
    <div className="relative space-y-8 overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase rounded-md bg-gray-100">
          <tr>
            {tableHead.map((head, i) => (
              <th
                onClick={() => {
                  head.name === "Customer" && handleSwitchOrderByCustomer();
                  head.name === "Total Transaction" &&
                    handleSwitchOrderByTotalTransaction();
                }}
                key={head.name}
                scope="col"
                className={`p-4 font-medium whitespace-nowrap capitalize ${
                  i === 0 && "rounded-l-md"
                } ${i === tableHead.length - 1 && "rounded-r-md"} ${
                  head.hasAction && "cursor-pointer transition hover:opacity-70"
                }`}>
                <div className="flex items-center justify-between">
                  <span>{head.name}</span>
                  {head.hasAction && <PiCaretUpDown className="w-5 h-5" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas &&
            datas?.map((data: TransactionTable) => (
              <tr key={data.customer}>
                <td className="p-4 truncate">{data.customer}</td>
                <td className={`p-4 truncate`}>
                  <span
                    className={`p-3 rounded-md capitalize ${
                      data.level === "warga" &&
                      "bg-orange-500/10 text-orange-500"
                    } ${
                      data.level === "juragan" &&
                      "bg-green-500/10 text-green-500"
                    } ${
                      data.level === "sultan" && "bg-blue-500/10 text-blue-500"
                    }
                ${
                  data.level === "konglomerat" &&
                  "bg-purple-500/10 text-purple-500"
                }`}>
                    {data.level}
                  </span>
                </td>
                <td className="p-4 truncate">{data.product}</td>
                <td className="p-4 truncate">
                  {convertRupiah(data.total_transaction)}
                </td>
                <td className="p-4 truncate flex items-center justify-start gap-1">
                  <Button className="bg-slate-500/10 text-slate-500 p-2 w-fit flex items-center gap-2">
                    <MdPersonSearch className="w-5 h-5" />
                    <span>Detail</span>
                  </Button>
                  <Button className="bg-green-500/10 text-green-500 p-2 w-fit">
                    <RiEdit2Fill className="w-4 h-4" />
                  </Button>
                  <Button className="bg-rose-500/10 text-rose-500 p-2 w-fit">
                    <MdDelete className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="p-4 flex justify-between items-center w-full">
        <p className="text-sm text-slate-700">Showing 10 data customers</p>
        <div className="flex items-center gap-4 text-sm">
          {pagination?.currentPage !== 1 && (
            <Button
              onClick={handlePreviousPage}
              className="bg-slate-700/10 text-slate-700">
              Back
            </Button>
          )}
          <span className="text-slate-700 w-full">
            {pagination?.currentPage} - {pagination?.totalPages}
          </span>
          {pagination?.hasNextPage && (
            <Button
              onClick={handleNextPage}
              className="bg-slate-700/10 text-slate-700">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
