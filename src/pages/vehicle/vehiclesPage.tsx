import { HomeButton } from "@/components/ui/homebutton";
import { VehicleTables } from "./vehicleTables";
const VehiclePage = () => {
  return (
    <>
      <div className="h-screen w-screen px-10">
        <h1>
          <div className="py-5">
            <span className="text-[#3cb882] text-4xl">SeeMTA v4 </span> vehicle list and calculator
          </div>
          <HomeButton />
        </h1>
        <VehicleTables />
      </div>
    </>
  );
};

export default VehiclePage;
