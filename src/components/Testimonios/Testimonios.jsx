export default function Testimonios() {
  return (
    <>
      <section className="container-testimonios">
        <div className="testimonio-container1 w-50">
          <h2>Testimonios de clientes</h2>
          <p>No los mires, únete</p>
          <a href="#">Ver todos</a>
        </div>
        <div className="testimonio-container 2w-80">
          <figure className="text-end border rounded-4 p-5">
            <blockquote className="blockquote">
              <p>
                A great pack. It includes everything you need to get started.
                There is a sound for almost everything
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">T.E. Games</figcaption>
            <div className="">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </figure>
        </div>
        <div className="testimonio-container 2w-100">
          <figure className="text-end border rounded-4 p-5">
            <blockquote className="blockquote">
              <p>
                This asset is a one-stop shop for sound effects for any type of
                game. Very good quality. Used in many games
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">Diwlupg</figcaption>
            <div className="">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
