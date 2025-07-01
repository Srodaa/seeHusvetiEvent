import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Vehicles as vehicles } from "./vehicleList";
import { useState } from "react";
import { VehicleSuggestion } from "./vehicleSuggestion";

export function VehicleTable() {
  const [filter, setFilter] = useState("");
  const [selectedCarPPPrice, setSelectedCarPPPrice] = useState(0);

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
                      <TableCell>{vehicles.price}</TableCell>
                      <TableCell>{vehicles.ppprice}</TableCell>
                      <TableCell>{vehicles.limit}</TableCell>
                      <TableCell>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCarPPPrice(selectedCarPPPrice + vehicles.ppprice);
                            } else {
                              setSelectedCarPPPrice(selectedCarPPPrice - vehicles.ppprice);
                            }
                          }}
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
        <div>{selectedCarPPPrice}</div>
      </div>
    </div>
  );
}
