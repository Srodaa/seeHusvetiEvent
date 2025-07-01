import { VehicleTable } from "./vehicleTable";
const VehiclePage = () => {
  return (
    <>
      <h1>SeeMTA V4 car shop list</h1>
      <div className="h-screen">
        <VehicleTable />
      </div>
    </>
  );
};

export default VehiclePage;
