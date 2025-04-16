import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MAIN_CATEGORIES = [
  "Los_Santos",
  "San_Fierro",
  "Bayside_Tierra",
  "Határ_után",
  "Angel_Pine",
  "Palomino",
  "Montgomery",
  "Blueberry"
];
const SUBCATEGORIES: { [key: string]: string[] } = {
  Los_Santos: [
    "BMS kút",
    "Mákvirág kaszinó",
    "Déli benzinkút",
    "Autókereskedés",
    "Városháza",
    "Autósiskola",
    "Pláza",
    "LS Kórház",
    "Nagykaszinó",
    "Északi kút"
  ],
  San_Fierro: ["SF Kórház", "ARMY benzinkút", "Fix&Drive", "SF kaszinó"],
  Angel_Pine: ["APMS", "AP Benzinkút"],
  Palomino: ["Tó"],
  Montgomery: ["Benzinkút", "Montgomery kórház"],
  Blueberry: ["Zálogház", "BB kút", "SeeRing kút"],
  Bayside_Tierra: ["Piac", "Tierra benzinkút", "EQ benzinkút", "EQ kórház", "Aranybika"],
  Határ_után: ["Elhagyatott kút", "Urmatrans depó", "Mezőgazd.", "Nagyker"]
};

const TWO_HOURS = 2 * 60 * 60 * 1000;
const STORAGE_KEY = "subcat-timers";

type TimerState = {
  [key: string]: number | null; // subcategory => startTime
};

const formatTime = (ms: number) => {
  const totalSeconds = Math.max(Math.floor(ms / 1000), 0);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

const Tablazat = () => {
  const [timers, setTimers] = useState<TimerState>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setTimers(JSON.parse(stored));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => ({ ...prev }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (subcategory: string) => {
    const newTimers = {
      ...timers,
      [subcategory]: Date.now()
    };
    setTimers(newTimers);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTimers));
  };

  const isDisabled = (subcategory: string) => {
    const startTime = timers[subcategory];
    return startTime !== null && Date.now() - startTime < TWO_HOURS;
  };

  const getRemainingTime = (subcategory: string) => {
    const startTime = timers[subcategory];
    if (!startTime || Date.now() - startTime >= TWO_HOURS) return "00:00:00";
    const remaining = TWO_HOURS - (Date.now() - startTime);
    return formatTime(remaining);
  };

  return (
    <div className="fixed right-0 top-0 p-4 border-2 rounded-md p-[1px] max-h-[100vh] min-h-[100vh] overflow-y-auto">
      <div className="grid grid-cols-3 gap-4">
        {MAIN_CATEGORIES.map((mainCategory, i) => (
          <div key={i} className="space-y-2 w-full">
            <h2 className="text-xl font-bold">{mainCategory}</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Name</TableHead>
                  <TableHead className="text-center">Time</TableHead>
                  <TableHead className="text-center">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SUBCATEGORIES[mainCategory]?.map((sub, idx) => {
                  const disabled = isDisabled(sub);
                  const remainingTime = getRemainingTime(sub);
                  return (
                    <TableRow key={idx}>
                      <TableCell>{sub}</TableCell>
                      <TableCell>{remainingTime}</TableCell>
                      <TableCell>
                        <input type="checkbox" disabled={disabled} onChange={() => handleChange(sub)} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablazat;
