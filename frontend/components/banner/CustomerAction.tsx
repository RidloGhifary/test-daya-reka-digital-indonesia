"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { IoPrintOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { FiPlus, FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import Button from "../ui/Button";
import { toast } from "react-hot-toast";
import { useTransactionsStore } from "@/hooks/useTransactionsStore";

type SearchCustomerFormData = {
  customer_name: string;
};

const schema = yup
  .object({
    customer_name: yup.string().required().trim(),
  })
  .required();

export default function CustomerBannerAction() {
  const { fetchTransactions, setOrder } = useTransactionsStore();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchCustomerFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      customer_name: "",
    },
  });

  const handleResetOrder = async () => {
    try {
      setOrder("");
      await fetchTransactions("");
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  const onSubmit = async (data: SearchCustomerFormData) => {
    try {
      await fetchTransactions(`search=${data.customer_name}`);
      reset();
      router.refresh();
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    }
  };

  return (
    <div className="w-full flex items-center justify-start gap-5 overflow-x-auto">
      <Button
        onClick={() => router.push("/customer?action=add-customer")}
        className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <FiPlus className="w-5 h-5" />
        <span>Add Customer</span>
      </Button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center bg-white rounded-md p-2">
          <label htmlFor="customer_name">
            <FiSearch className="w-5 h-5 text-gray-400 mx-2" />
          </label>
          <input
            {...register("customer_name")}
            placeholder="Search Customer"
            className={`outline-none border-none focus:outline-none text-black ${
              errors.customer_name && "border border-rose-500 text-rose-500"
            }`}
          />
          <Button
            type="submit"
            className="bg-primary text-white w-fit p-2 px-4">
            Search
          </Button>
        </div>
      </form>

      <Button
        onClick={() => toast.success("Coming Soon!")}
        className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <CiFilter className="w-5 h-5" />
        <span>Filter</span>
      </Button>

      <Button
        onClick={handleResetOrder}
        className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <LuRefreshCcw className="w-5 h-5" />
        <span>Refresh</span>
      </Button>

      <Button
        onClick={() => toast.success("Coming Soon!")}
        className="flex items-center gap-3 text-white bg-white/30 w-fit text-sm">
        <IoPrintOutline className="w-5 h-5" />
      </Button>
    </div>
  );
}
