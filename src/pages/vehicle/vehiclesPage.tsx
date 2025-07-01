import { VehicleTable } from "./vehicleTable";
const VehiclePage = () => {
  return (
    <>
      <div className="h-screen w-screen px-10">
        <h1>
          <div className="py-5">
            <span className="text-[#3cb882] text-4xl">SeeMTA v4 </span> vehicle list and calculator
          </div>
        </h1>
        <VehicleTable />
      </div>
    </>
  );
};

export default VehiclePage;
