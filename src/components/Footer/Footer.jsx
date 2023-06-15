export default function Footer() {
  return (
    <>
      <footer className="container-footer">
        <div className="container d-flex">
          <div className="w-100">
            <a href="#" className="h4 text-decoration-none">
              After the Earth
            </a>
            <div className="d-flex gap-3 mt-5">
              <ul>
                <li>Politica de cosas</li>
                <li>Politica de devoluciones</li>
                <li>Politica de cookis</li>
                <li>Politica de cosas</li>
              </ul>
              <ul>
                <li>Politica de cosas</li>
                <li>Politica de devoluciones</li>
                <li>Politica de cookis</li>
                <li>Politica de cosas</li>
              </ul>
            </div>
          </div>
          <div className="w-100">
            <h4>Suscribete a la Newsletter</h4>
            <p>Recibe un paquete de samples FREE!</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="button-addon2"
              />
              <button className="btn" type="button" id="button-addon2">
                Suscribete
              </button>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">Default checkbox</label>
            </div>
            <div className="d-flex gap-3">
              <p>Siguenos en redes</p>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
