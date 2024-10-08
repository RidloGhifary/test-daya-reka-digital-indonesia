import EmptyContent from "@/components/EmptyContent";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div className="w-full space-y-6">
      <Heading
        title="Dashboard"
        subtitle="You can manage and view your orders on this dashboard"
      />
      <hr />
      <EmptyContent />
    </div>
  );
}
