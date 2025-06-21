import Kereso from "./kereso";
import "./Tablazat";
import Tablazat from "./Tablazat";
import image from "../../assets/map_easter.png";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Husvet = () => {
  return (
    <>
      <Link to="../SrodaaSee/">
        <Button
          variant="outline"
          className="fixed top-5 left-2 z-50 bg-slate-850 border border-gray-700 hover:bg-slate-800 hover:text-white cursor-pointer"
        >
          <Home></Home>
        </Button>
      </Link>
      <div id="husvetbody" className="relative w-screen">
        <div className="absolute z-50 right-[2%] bottom-[26%]">
          <Kereso />
        </div>
        <div className="flex bg-[#222] min-w-screen">
          <div className="w-1/2 z-0">
            <img src={image} />
          </div>
          <div className="w-1/2 z-00">
            <Tablazat />
          </div>
        </div>
      </div>
    </>
  );
};

export default Husvet;
