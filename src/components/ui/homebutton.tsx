import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeButton() {
  return (
    <div>
      <Link to="../SrodaaSee/">
        <Button
          variant="outline"
          className="fixed top-5 left-2 z-50 bg-slate-850 border border-gray-700 hover:bg-slate-800 hover:text-white cursor-pointer"
        >
          <Home></Home>
        </Button>
      </Link>
    </div>
  );
}
