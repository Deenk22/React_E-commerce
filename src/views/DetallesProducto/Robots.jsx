export default function Robots() {
  return (
    <>
      <div className="detalles-creatures">
        <div>
          <img
            src="./src/assets/ate-creatures.png"
            alt="Arrival-Cover"
            width="800px"
          />
        </div>
        <div className="info-detalle">
          <h1>CREATURE Monster Sound Effects</h1>
          <p>
            Sample pack consisting of 12 very interesting sounds! You can use
            them wherever and as many times as you want. If you have any doubts
            and you want to modify one of the sounds included in the package and
            you can´t do it, please contact us.
          </p>
          <p>6.99$</p>
          <div className="añadir-cantidad-carrito-btn">
            <input type="number" min="1" />
            <button className="add-basket-btn" type="submit">
              Añadir al carrito
            </button>
          </div>
          <p>
            Incluye <strong>30 samples</strong> totalmente gratis! por la compra
            de este producto!
          </p>
          <div className="preview-video">
            <h5>Video preview</h5>
            <a
              href="https://www.youtube.com/watch?v=bzlEqrVk_-c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/youtube.png"
                width="50px"
                alt="Video-Youtube"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="info-detallada-producto">
        <div>
          <div>
            <h3>Caracteristicas del producto</h3>
            <p>
              Sample pack consisting of 12 very interesting sounds for free! You
              can use them wherever and as many times as you want. If you have
              any doubts and you want to modify one of the sounds included in
              the package and you can´t do it, please contact us.
            </p>
          </div>
        </div>
        <div className="info-detallada-producto-ul">
          <h3>Especificaciones técnicas</h3>
          <ul className="lista-info">
            <li>130 Sonidos</li>
            <li>Sample rate = 48khz</li>
            <li>Bit rate = 24bit</li>
            <li>Do sound fx loop = Yes</li>
            <li>Compatible con todas las plataformas</li>
            <li>Mastering profesional</li>
            <li>5 min de audio proporconados</li>
          </ul>
        </div>
      </div>
      <div className="container-opiniones">
        <div className="opiniones-destacadas">
          <div className="title-icon">
            <h2>Opiniones destacadas</h2>
            <i className="bi bi-megaphone h1"></i>
          </div>
          <div>
            <p>Compradores verificados han dejado estas opiniones</p>

            <button type="submit" value="verOpiniones">
              Ver todas las opiniones
            </button>
          </div>
        </div>
        <div className="opiniones-detalles-producto">
          <div className="bloque-individual-opiniones">
            <p>
              Los sonidos son increibles! no tuve que realizar ningún
              procesamiento despues de la compra. Un sonido muy profesional.
            </p>
            <h5>Carlos</h5>
          </div>
          <div className="bloque-individual-opiniones">
            <p>
              Realice dos compras que realmente me dejaron impresionado! se nota
              que hay mucho trabajo detrás de cada sonido.
            </p>
            <h5>Jesús</h5>
          </div>
        </div>
      </div>
    </>
  );
}
