import { Vehicles as vehicles } from "./vehicleList";
import { useState } from "react";
import { VehicleSuggestion } from "./vehicleSuggestion";
import { VehicleTunings } from "./vehicleTunings";
import { Input } from "@/components/ui/input";
import TuningTable from "./tuningTable";
import VehicleTable from "./vehicleTable";

export function VehicleTables() {
  const [filter, setFilter] = useState("");
  const [selectedCarPPPrice, setSelectedCarPPPrice] = useState(0);
  const [totalTuningPrice, setTotalTuningPrice] = useState<{ [key: number]: number }>({});
  const [selectedVehicleIndices, setSelectedVehicleIndices] = useState<number[]>([]);
  const [ppExchange, setPpExchane] = useState(650);

  const totalPPPrice = selectedCarPPPrice + Object.values(totalTuningPrice).reduce((sum, price) => sum + price, 0);
  const totalPrice = totalPPPrice * ppExchange;

  return (
    <div className="border-2 border-gray-600 rounded-md h-[70%] flex overflow-hidden">
      <div className="flex-1">
        <div className="grid grid-cols-3 mt-7 mx-10 max-w-165">
          <div className="col-span-2">
            <VehicleSuggestion vehicles={vehicles} filter={filter} setFilter={setFilter} />
          </div>
          <Input
            placeholder="Enter PP price, ex. 650"
            className="ml-5 float-right"
            type="number"
            onChange={(e) => {
              setPpExchane(parseInt(e.target.value) || 0);
            }}
          ></Input>
        </div>
        <VehicleTable
          vehicles={vehicles}
          filter={filter}
          setSelectedCarPPPrice={setSelectedCarPPPrice}
          selectedVehicleIndices={selectedVehicleIndices}
          setSelectedVehicleIndices={setSelectedVehicleIndices}
          setTotalTuningPrice={setTotalTuningPrice}
          totalTuningPrice={totalTuningPrice}
        ></VehicleTable>
        <div className="h-full max-w-250">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-xl font-bold">Total PP price: {totalPPPrice} PP</div>
            <div className="text-xl font-bold">Total price: {totalPrice.toLocaleString("hu-HU")} $</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <TuningTable
          vehicles={vehicles}
          filter={filter}
          setTotalTuningPrice={setTotalTuningPrice}
          selectedVehicleIndices={selectedVehicleIndices}
          VehicleTunings={VehicleTunings}
          totalTuningPrice={totalTuningPrice}
        />
      </div>
    </div>
  );
}
