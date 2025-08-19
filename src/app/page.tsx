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
          
          {/* Foto izquierda */}
          <div className="sobre-mi-img">
            <Image
              src="/foto_perfil.png"
              alt="Kilian"
              width={500}
              height={800}
              className="perfil-img"
              priority
            />
          </div>

          {/* Columna derecha */}
          <div className="sobre-mi-right">
            {/* Card de presentación */}
            <div className="sobre-mi-card main-card">
              <h2>SOBRE MÍ</h2>
              <p>
                Soy Kilian Zurera Vizuete, especialista en comunicación digital y 
                creador de contenidos. Tras una etapa de prácticas en el departamento 
                de marketing de Yaskawa Ibérica y experiencias reales gestionando 
                proyectos en carretera y en ferias, ofrezco servicios de community 
                management, producción y edición de vídeo, fotografía corporativa, 
                gestión de redes y soporte en CRM y logística de eventos.
              </p>
              <p>
                Me verás siempre con la cámara en la mano: me gusta documentar procesos, 
                contar historias visuales y transformar ese material en piezas que conecten 
                con audiencias reales.
              </p>
            </div>

            {/* Galería inferior */}
            <div className="sobre-mi-gallery">
              <div className="gallery-card">
                <Image
                  src="/foto_corriendo.png"
                  alt="Running"
                  width={300}
                  height={200}
                  className="gallery-img"
                />
              </div>
              <div className="gallery-card">
                <Image
                  src="/foto_puigmal.jpg"
                  alt="Montaña"
                  width={300}
                  height={200}
                  className="gallery-img"
                />
              </div>
            </div>
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
