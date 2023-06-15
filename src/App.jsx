import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Productos from "./views/Productos/Productos";
import Creatures from "./views/DetallesProducto/Creatures";
import Robots from "./views/DetallesProducto/Robots";
import AboutUs from "../src/views/AboutUs/AboutUs";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos">
            <Route index element={<Productos />} />
            <Route path="creatures/:id" element={<Creatures />} />
            <Route path="robots/:id" element={<Robots />} />
          </Route>
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
