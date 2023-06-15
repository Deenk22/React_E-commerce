import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Cards({ InfoCards }) {
  return (
    <>
      <div className="p-destacados">
        <div className="titulo-p-destacados">
          <h2 className="title">
            Products
            <i className="bi bi-controller"></i>
          </h2>
        </div>
      </div>
      <section className="cards-todas d-flex gap-3 my-3">
        {InfoCards.map((OneCard, index) => (
          <div key={index} className="card">
            <img src={OneCard.img} alt="Creatures" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{OneCard.title}</h5>
                <span>
                  {OneCard.price}
                  <i className="bi bi-currency-euro"></i>
                </span>
              </div>

              <div className="star-icons">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>

              <p className="card-text">{OneCard.description}</p>
              <div className="btn-cards gap-3">
                <a href="#" className="w-100">
                  Añadir a carrito
                </a>
                <Link to={`/productos/creatures/${OneCard.id}`}>Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
