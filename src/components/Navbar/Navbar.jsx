import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-P">
      <Link to="/" className="nav-deenk">
        HOME
      </Link>
      <Link to="productos" className="nav-deenk">
        PRODUCTS
      </Link>
      <Link to="productos" className="nav-deenk">
        FREE FOR A MONTH
      </Link>
      <Link to="aboutus" className="nav-deenk">
        ABOUT US
      </Link>
      {/* <Link to="formasdepago" className="nav-deenk">
        METHOD OF PAYMENT
      </Link>
      <Link to="finalizarcompra" className="nav-deenk">
        TO CHECKOUT
      </Link> */}
    </div>
  );
}
