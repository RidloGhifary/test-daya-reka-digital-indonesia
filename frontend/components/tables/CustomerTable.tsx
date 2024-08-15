"use client";

import { tableHead } from "@/constants";
import { TransactionTable } from "@/types";
import { PiCaretUpDown } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { MdPersonSearch } from "react-icons/md";
import Button from "@/components/ui/Button";
import convertRupiah from "@/utils/formatRupiah";

interface CustomerTableProps {
  datas: TransactionTable[];
}

export default function CustomerTable({ datas }: CustomerTableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase rounded-md bg-gray-100">
          <tr>
            {tableHead.map((head, i) => (
              <th
                key={head.name}
                scope="col"
                className={`p-4 font-medium whitespace-nowrap ${
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
          {datas.map((data: TransactionTable) => (
            <tr key={data.customer}>
              <td className="p-4 truncate">{data.customer}</td>
              <td className={`p-4 truncate`}>
                <span
                  className={`p-3 rounded-md capitalize ${
                    data.level === "warga" && "bg-orange-500/10 text-orange-500"
                  } ${
                    data.level === "juragan" && "bg-green-500/10 text-green-500"
                  } ${data.level === "sultan" && "bg-blue-500/10 text-blue-500"}
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
    </div>
  );
}
