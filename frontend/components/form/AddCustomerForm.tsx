"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import createCustomer from "@/actions/create-customer";

const schema = yup
  .object({
    firstname: yup.string().required().trim(),
    lastname: yup.string().required().trim(),
    phone_number: yup.string().required(),
    level: yup.string().required().trim(),
    address: yup.string().required().trim(),
  })
  .required();

export type CreateCustomerFormData = {
  firstname: string;
  lastname: string;
  phone_number: string;
  address: string;
  level: string;
};

export default function AddCustomerForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCustomerFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone_number: "",
      address: "",
      level: "",
    },
  });

  const onSubmit = async (data: CreateCustomerFormData) => {
    setIsLoading(true);

    try {
      await createCustomer(data);
      reset();
      toast.success("Success!");
      router.push("/customer");
    } catch (error) {
      return toast.error("Ups, Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname" className="text-xs text-slate-700">
                First Name
              </label>
              <Input
                disabled={isLoading}
                {...register("firstname")}
                name="firstname"
                placeholder="John"
              />
              {errors.firstname && (
                <span className="text-red-500 text-xs">
                  {errors.firstname?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastname" className="text-xs text-slate-700">
                Last Name
              </label>
              <Input
                disabled={isLoading}
                {...register("lastname")}
                name="lastname"
                placeholder="Doe"
              />
              {errors.lastname && (
                <span className="text-red-500 text-xs">
                  {errors.lastname?.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone_number" className="text-xs text-slate-700">
                Phone number
              </label>
              <Input
                disabled={isLoading}
                {...register("phone_number")}
                name="phone_number"
                placeholder="081122334455"
              />
              {errors.phone_number && (
                <span className="text-red-500 text-xs">
                  {errors.phone_number?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="level" className="text-xs text-slate-700">
                Level
              </label>
              <select
                disabled={isLoading}
                {...register("level")}
                name="level"
                className="flex w-full rounded-md border bg-white px-3 py-3 text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="warga" defaultChecked>
                  warga
                </option>
                <option value="juragan">juragan</option>
                <option value="sultan">sultan</option>
                <option value="konglomerat">konglomerat</option>
              </select>
              {errors.level && (
                <span className="text-red-500 text-xs">
                  {errors.level?.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-xs text-slate-700">
              Address
            </label>
            <Textarea
              disabled={isLoading}
              {...register("address")}
              placeholder="Jl. Raya Cileungsi, Kec. Cileungsi, Kab. Bogor, Jawa Barat, Indonesia 16820"
              rows={3}
              className="resize-none"
            />
            {errors.address && (
              <span className="text-red-500 text-xs">
                {errors.address?.message}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              disabled={isLoading}
              onClick={() => router.push("/customer")}
              className="bg-slate-700/10 text-slate-700 w-fit px-10">
              {isLoading ? "Loading..." : "Cancel"}
            </Button>
            <Button
              disabled={isLoading}
              type="submit"
              className="bg-primary text-white w-fit px-10">
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
