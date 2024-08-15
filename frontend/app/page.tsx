import Banner from "@/components/banner-actions/Banner";
import BannerAction from "@/components/banner-actions/CustomerAction";
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

      {/* <div className="w-full gap-3 flex">
        <div className="w-full">
          <Banner>
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="text-sm text-white">
              On this menu you will be able to create, edit and also delete
            </p>
            <p className="text-sm text-white">
              the customer. Also you can manage it easily
            </p>
            <div>
              <BannerAction />
            </div>
          </Banner>
        </div>

        <div className="w-80">Hallo world</div>
      </div> */}
    </div>
  );
}
