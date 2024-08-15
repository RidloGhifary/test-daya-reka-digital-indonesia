import Heading from "@/components/Heading";
import CustomerContent from "./_components/CustomerContent";

export default function Customer() {
  return (
    <div className="w-full space-y-6">
      <Heading
        title="Dashboard"
        subtitle="You can manage and view your orders on this dashboard"
      />
      <hr />

      <CustomerContent />
    </div>
  );
}
