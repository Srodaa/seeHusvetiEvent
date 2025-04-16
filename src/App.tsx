import "./App.css";
import "./Tablazat";
import Tablazat from "./Tablazat";
import image from "/map_easter.png";

function App() {
  return (
    <div className="flex bg-[#222] min-w-screen">
      <div className="w-1/2">
        <img src={image} />
      </div>
      <div className="w-1/2">
        <Tablazat />
      </div>
    </div>
  );
}

export default App;
