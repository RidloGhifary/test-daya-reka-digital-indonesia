import EmptyContent from "@/components/EmptyContent";
import Heading from "@/components/Heading";

export default function Restaurant() {
  return (
    <div className="w-full space-y-6">
      <Heading
        title="Stock"
        subtitle="You can manage and view the stock on this page"
      />
      <hr />
      <EmptyContent />
    </div>
  );
}
