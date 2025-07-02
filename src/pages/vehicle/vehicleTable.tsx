import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Vehicles as vehicles } from "./vehicleList";
import { useState } from "react";
import { VehicleSuggestion } from "./vehicleSuggestion";
import { TuningTypes, VehicleTunings } from "./vehicleTunings";

export function VehicleTable() {
  const [filter, setFilter] = useState("");
  const [selectedCarPPPrice, setSelectedCarPPPrice] = useState(0);
  const [totalTuningPrice, setTotalTuningPrice] = useState<{ [key: number]: number }>({});
  const [selectedVehicleIndices, setSelectedVehicleIndices] = useState<number[]>([]);

  const filtered = vehicles.filter((veh) => veh.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="border-2 border-gray-600 rounded-md h-[70%] flex">
      <div className="flex-1">
        <div className="mt-7 mx-10 max-w-120">
          <VehicleSuggestion vehicles={vehicles} filter={filter} setFilter={setFilter} />
        </div>
        <div className="h-full max-w-250">
          <div className="border-2 rounded-md border-gray-600 m-10 overflow-auto relative max-h-4/6">
            <Table>
              <TableHeader className="sticky top-0 bg-[#222020] shadow-[0_2px_0_0_#ffffff] z-1">
                <TableRow>
                  <TableHead className="text-center">Name</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">PP Price</TableHead>
                  <TableHead className="text-center">Limit</TableHead>
                  <TableHead className="text-center">Select</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((vehicles, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{vehicles.name}</TableCell>
                      <TableCell>{vehicles.price} $</TableCell>
                      <TableCell>{vehicles.ppprice} PP</TableCell>
                      <TableCell>{vehicles.limit}</TableCell>
                      <TableCell>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              if (selectedVehicleIndices.length < 2) {
                                setSelectedCarPPPrice((prev) => prev + vehicles.ppprice);
                                setSelectedVehicleIndices((prev) => [...prev, i]);
                                setTotalTuningPrice((prev) => ({ ...prev, [i]: 0 }));
                              }
                            } else {
                              setSelectedCarPPPrice((prev) => prev - vehicles.ppprice);
                              setSelectedVehicleIndices((prev) => prev.filter((index) => index !== i));
                              const { [i]: removed, ...rest } = totalTuningPrice;
                              setTotalTuningPrice(rest);
                            }
                          }}
                          checked={selectedVehicleIndices.includes(i)}
                          disabled={!selectedVehicleIndices.includes(i) && selectedVehicleIndices.length >= 2}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-4">
          {selectedVehicleIndices.map((vehicleIndex) => (
            <div key={vehicleIndex} className="border-2 rounded-md border-gray-600 overflow-hidden">
              <h3 className="text-lg font-semibold bg-[#222020]">{filtered[vehicleIndex]?.name} Tunings</h3>
              <div className="overflow-auto relative max-h-[220px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-[#222020] shadow-[0_2px_0_0_#ffffff] z-1">
                    <TableRow>
                      <TableHead className="text-center">Tuning</TableHead>
                      <TableHead className="text-center">Price</TableHead>
                      <TableHead className="text-center">Select</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {VehicleTunings.map((tuning, index) => (
                      <TableRow key={index}>
                        <TableCell>{tuning.name}</TableCell>
                        <TableCell>{tuning.price} PP</TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              const priceChange = e.target.checked ? tuning.price : -tuning.price;
                              setTotalTuningPrice((prev) => ({
                                ...prev,
                                [vehicleIndex]: (prev[vehicleIndex] || 0) + priceChange
                              }));
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-2 font-semibold">Total PP price: {totalTuningPrice[vehicleIndex] || 0} PP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
