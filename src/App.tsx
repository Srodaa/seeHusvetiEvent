import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Husvet from "./pages/husvet/husvet";
import "./pages/husvet/Tablazat";
import Auto from "./pages/auto/auto";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="SrodaaSee/" element={<Home />} />
        <Route path="SrodaaSee/husvet" element={<Husvet />} />
        <Route path="SrodaaSee/auto" element={<Auto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
