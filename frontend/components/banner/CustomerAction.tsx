"use client";

import { useRouter } from "next/navigation";
import { IoPrintOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { FiPlus, FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import Button from "../ui/Button";

export default function CustomerBannerAction() {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-start gap-5 overflow-x-auto">
      <Button
        onClick={() => router.push("/customer?action=add-customer")}
        className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <FiPlus className="w-5 h-5" />
        <span>Add Customer</span>
      </Button>

      <div className="flex items-center bg-white rounded-md p-2">
        <FiSearch className="w-5 h-5 text-gray-400 mx-2" />
        <input
          placeholder="Search Customer"
          className="outline-none border-none focus:outline-none text-black"
        />
        <Button className="bg-primary text-white w-fit p-2 px-4">Search</Button>
      </div>

      <Button className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <CiFilter className="w-5 h-5" />
        <span>Filter</span>
      </Button>

      <Button className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <LuRefreshCcw className="w-5 h-5" />
        <span>Refresh</span>
      </Button>

      <Button className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <IoPrintOutline className="w-5 h-5" />
      </Button>
    </div>
  );
}
