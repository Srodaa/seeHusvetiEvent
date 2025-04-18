import "./App.css";
import Kereso from "./kereso";
import "./Tablazat";
import Tablazat from "./Tablazat";
import image from "/map_easter.png";

function App() {
  return (
    <>
      <div className="relative w-screen">
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
}

export default App;
