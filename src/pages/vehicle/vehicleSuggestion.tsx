import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AutoType } from "./vehicleList";

interface VehicleSuggestionProps {
  vehicles: AutoType[];
  filter: string;
  setFilter: (value: string) => void;
}

export function VehicleSuggestion({ vehicles, filter, setFilter }: VehicleSuggestionProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const matches = vehicles.filter((veh) => veh.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Input
        placeholder="Filter names..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && filter.length > 0 && matches.length > 1 && (
        <div className="absolute bg-[#242424] z-2 border-2 border-gray-600 rounded-md w-100 max-h-50 overflow-auto mt-1 shadow-md text-left">
          {matches.map((vehicle, i) => (
            <div
              key={i}
              className="px-3 py-2 hover:bg-[#222020] cursor-pointer"
              onClick={() => {
                setFilter(vehicle.name);
              }}
            >
              {vehicle.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
