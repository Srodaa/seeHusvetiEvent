import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AutoType } from "./vehicleList";
import { TuningTypes } from "./vehicleTunings";
import { Dispatch, memo, SetStateAction } from "react";

interface TuningTableProps {
  vehicles: AutoType[];
  filter: string;
  setTotalTuningPrice: Dispatch<SetStateAction<{ [key: number]: number }>>;
  selectedVehicleIndices: number[];
  VehicleTunings: TuningTypes[];
  totalTuningPrice: { [key: number]: number };
}

const TuningTable = memo(function TuningTable({
  vehicles,
  filter,
  setTotalTuningPrice,
  selectedVehicleIndices,
  VehicleTunings,
  totalTuningPrice
}: TuningTableProps) {
  const filtered = vehicles.filter((veh) => veh.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
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
            <div className="mt-2 font-semibold">
              Total PP price: {totalTuningPrice[vehicleIndex].toLocaleString("hu-HU") || 0} PP
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default TuningTable;
