import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-w-screen">
      <div className="flex flex-wrap flex-col md:flex-row min-h-screen min-w-screen content-center">
        <div className="flex-1 flex justify-center h-65">
          <div className="rounded-full bg-[#343434] w-60 h-60 hover:w-62 hover:h-62 flex items-center justify-center duration-500 circle">
            <Link to="./auto">
              <Car size="170" color="black" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center h-65">
          <div className="rounded-full bg-[#343434] w-60 h-60 hover:w-62 hover:h-62 flex items-center justify-center duration-500 circle">
            <Link to="./husvet">
              <img src="./src/assets/easter-egg.svg" width="170" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
