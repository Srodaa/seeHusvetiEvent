import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Husvet from "./pages/husvet/husvet";
import "./pages/husvet/Tablazat";
import VehiclePage from "./pages/vehicle/VehiclesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="SrodaaSee/" element={<HomePage />} />
        <Route path="SrodaaSee/husvet" element={<Husvet />} />
        <Route path="SrodaaSee/auto" element={<VehiclePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
