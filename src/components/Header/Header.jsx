import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="navbar navbar-expand-lg deenk-navbar">
        <div className="container gap-3">
          <img
            src="./src//assets/After The Earth-logos_white.png"
            alt="Logo_AftertheEarth"
            width="190px"
          />
          <form className="d-flex w-100" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div className="icon-basket">
            <Link to="carrito">
              <i className="bi bi-cart2 h1"></i>
            </Link>
          </div>

          {/* <Link to="carrito">
            <button type="button" className="btn-carrito position-relative">
              Carrito
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-cantidad-carrito">
                7+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
}
