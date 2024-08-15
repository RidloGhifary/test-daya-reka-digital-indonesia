import Banner from "@/components/banner-actions/Banner";
import BannerAction from "@/components/banner-actions/CustomerAction";
import Heading from "@/components/Heading";

export default function Customer() {
  return (
    <div className="w-full space-y-6">
      <Heading
        title="Dashboard"
        subtitle="You can manage and view your orders on this dashboard"
      />
      <hr />

      <div className="w-full gap-3 flex">
        <div className="w-full">
          <Banner
            title="Dashboard"
            subtitle="On this menu you will be able to create, edit and also delete"
            secondarySubtitle="the customer. Also you can manage it easily">
            <BannerAction />
          </Banner>
        </div>

        <div className="w-80">Hallo world</div>
      </div>
    </div>
  );
}
