import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* INICIO */}
     <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>
            <span>KILIAN</span> <span className="highlight"></span> ZURERA VIZUETE
          </h1>
          <p>Community Manager y Marketing Specialist</p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="sobre-mi-content">
          {/* Imagen a la izquierda */}
          <div className="sobre-mi-img">
            <Image
              src="/foto_perfil.png" // la imagen debe estar en /public
              alt="Kilian"
              width={350}
              height={450}
              className="perfil-img"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="sobre-mi-text">
            <h2>SOBRE MÍ</h2>
            <p>
              Párrafo. Aquí puedes agregar tu propia biografía o descripción
              personal. Explica quién eres, a qué te dedicas y qué te apasiona.
            </p>
            <p>
              Este espacio es ideal para dar más detalles sobre tu experiencia y
              habilidades. Añade tu toque personal para conectar con la audiencia.
            </p>
            <a href="#curriculum" className="btn">
              Ver currículum
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section">
        <h2>Proyectos</h2>
        <p>En este apartado puedes mostrar tus proyectos realizados.</p>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="section">
        <h2>Galería</h2>
        <p>Aquí puedes añadir fotos, proyectos visuales, etc.</p>
      </section>

      {/* CURRÍCULUM */}
      <section id="curriculum" className="section">
        <h2>Currículum</h2>
        <p>Un resumen de tu experiencia profesional y estudios.</p>
      </section>

      {/* REPRESENTACIÓN */}
      <section id="representacion" className="section">
        <h2>Representación</h2>
        <p>Datos de tu agencia, representante o formas de contacto.</p>
      </section>
    </div>
  );
}
