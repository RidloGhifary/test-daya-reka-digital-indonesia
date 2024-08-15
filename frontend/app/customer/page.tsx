import Banner from "@/components/banner-actions/Banner";
import BannerAction from "@/components/banner-actions/CustomerAction";
import Heading from "@/components/Heading";
import RightContentSide from "@/components/RightContentSide";
import CustomerTable from "@/components/tables/CustomerTable";
import { TransactionTable } from "@/types";

const datas: TransactionTable[] = [
  {
    customer: "Ridlo achmad ghifary",
    level: "juragan",
    product: "Nasi Goreng",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Agus fatih",
    level: "konglomerat",
    product: "Mie ayam",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Ridlo achmad ghifary",
    level: "juragan",
    product: "Nasi Goreng",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Agus fatih",
    level: "konglomerat",
    product: "Mie ayam",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Ridlo achmad ghifary",
    level: "juragan",
    product: "Nasi Goreng",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Agus fatih",
    level: "konglomerat",
    product: "Mie ayam",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Ridlo achmad ghifary",
    level: "juragan",
    product: "Nasi Goreng",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Agus fatih",
    level: "konglomerat",
    product: "Mie ayam",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Ridlo achmad ghifary",
    level: "juragan",
    product: "Nasi Goreng",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
  {
    customer: "Agus fatih",
    level: "konglomerat",
    product: "Mie ayam",
    total_transaction: 25000,
    total_quantity: 2,
    last_transaction_date: new Date(),
  },
];

export default function Customer() {
  return (
    <div className="w-full space-y-6">
      <Heading
        title="Dashboard"
        subtitle="You can manage and view your orders on this dashboard"
      />
      <hr />

      <div className="w-full gap-3 flex">
        <div className="w-full space-y-4">
          <Banner
            title="Dashboard"
            subtitle="On this menu you will be able to create, edit and also delete"
            secondarySubtitle="the customer. Also you can manage it easily">
            <BannerAction />
          </Banner>

          <CustomerTable datas={datas} />
        </div>

        <RightContentSide
          title="See analytics of the customer clearly"
          subtitle="See analytics"
        />
      </div>
    </div>
  );
}
