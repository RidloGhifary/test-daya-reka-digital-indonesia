"use client";

import { useSearchParams } from "next/navigation";
import Banner from "@/components/banner/Banner";
import CustomerBannerAction from "@/components/banner/CustomerAction";
import RightContentSide from "@/components/RightContentSide";
import CustomerTable from "@/components/tables/CustomerTable";
import AddCustomerForm from "@/components/form/AddCustomerForm";
import { useEffect } from "react";
import { useTransactionsStore } from "@/hooks/useTransactionsStore";
import EmptyContent from "@/components/EmptyContent";

export default function CustomerContent() {
  const { transactions, fetchTransactions } = useTransactionsStore();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const params = useSearchParams();
  const action = params?.get("action");

  return (
    <div className="w-full gap-3 flex">
      <div className="w-full space-y-4">
        {action !== "add-customer" && (
          <Banner
            title="Dashboard"
            subtitle="On this menu you will be able to create, edit and also delete"
            secondarySubtitle="the customer. Also you can manage it easily">
            <CustomerBannerAction />
          </Banner>
        )}

        {action === "add-customer" ? (
          <>
            <Banner
              title="Add Customer"
              subtitle="Fill in the form correctly and do not leave any fields blank"
              secondarySubtitle="After filling in the form, click the submit button to add a new customer"
            />
            <AddCustomerForm />
          </>
        ) : !transactions ? (
          <EmptyContent />
        ) : (
          <CustomerTable
            datas={transactions && transactions?.data}
            pagination={transactions && transactions?.pagination}
          />
        )}
      </div>

      <RightContentSide
        title="See analytics of the customer clearly"
        subtitle="See analytics"
      />
    </div>
  );
}
