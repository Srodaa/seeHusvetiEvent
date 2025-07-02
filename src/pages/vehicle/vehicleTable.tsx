import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AutoType } from "./vehicleList";
import { Dispatch, memo, SetStateAction } from "react";

interface VehicleTableProps {
  vehicles: AutoType[];
  filter: string;
  setSelectedCarPPPrice: Dispatch<SetStateAction<number>>;
  selectedVehicleIndices: number[];
  setSelectedVehicleIndices: Dispatch<SetStateAction<number[]>>;
  setTotalTuningPrice: Dispatch<SetStateAction<{ [key: number]: number }>>;
  totalTuningPrice: { [key: number]: number };
}

const VehicleTable = memo(function VechicleTable({
  vehicles,
  filter,
  setSelectedCarPPPrice,
  selectedVehicleIndices,
  setSelectedVehicleIndices,
  setTotalTuningPrice,
  totalTuningPrice
}: VehicleTableProps) {
  const filtered = vehicles.filter((veh) => veh.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
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
                  <TableCell>{vehicles.price.toLocaleString("hu-HU")} $</TableCell>
                  <TableCell>{vehicles.ppprice.toLocaleString("hu-HU")} PP</TableCell>
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
    </>
  );
});
export default VehicleTable;
