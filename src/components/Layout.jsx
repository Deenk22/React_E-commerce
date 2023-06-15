import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Benefits from "./Benefits/Benefits";
import Compañias from "./Compañias/Compañias";
import Imagenes from "./Imagenes/Imagenes";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Header />
      <Compañias />
      <Outlet />
      <Imagenes />
      <Benefits />
      <Footer />
    </>
  );
}
