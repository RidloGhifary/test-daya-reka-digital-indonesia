import Heading from "@/components/Heading";
import CustomerContent from "./_components/CustomerContent";
import getTransactions from "@/actions/getTransactions";

export default async function Customer() {
  const transactions = await getTransactions();

  return (
    <div className="w-full space-y-6">
      <Heading
        title="Dashboard"
        subtitle="You can manage and view your orders on this dashboard"
      />
      <hr />

      <CustomerContent transactions={transactions} />
    </div>
  );
}
