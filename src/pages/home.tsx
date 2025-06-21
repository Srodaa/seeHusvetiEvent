import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-700 min-w-screen">
      <div className="flex flex-wrap flex-col md:flex-row min-h-screen min-w-screen content-center">
        <div className="flex-1 flex justify-center h-65">
          <div className="rounded-full bg-gray-800 w-60 h-60 hover:w-62 hover:h-62 flex items-center justify-center hover:shadow-[0px_0px_130px] shadow-cyan-500/50 duration-700">
            <Link to="./auto">
              <Car size="170" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center h-65">
          <div className="rounded-full bg-gray-800 w-60 h-60 hover:w-62 hover:h-62 flex items-center justify-center hover:shadow-[0px_0px_130px] shadow-cyan-500/50 duration-500">
            <Link to="./husvet">
              <img src="src/assets/easter-egg.svg" width="170" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
