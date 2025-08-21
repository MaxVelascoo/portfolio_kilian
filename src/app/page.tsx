import Image from "next/image";
import Proyectos from "@/components/Proyectos";
import Experiencia from "@/components/Experiencia";
import { FaInstagram } from "react-icons/fa";
import { SiStrava } from "react-icons/si";

export default function HomePage() {
  return (
    <div className="folio">
      {/* INICIO */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>
            <span>KILIAN</span>{" "}
            <span className="highlight"></span> ZURERA VIZUETE
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
            <div className="sobre-mi-card main-card">
              <h2>SOBRE MÍ</h2>
              <p>
                Soy Kilian Zurera Vizuete, especialista en comunicación digital
                y creador de contenidos...
              </p>
              <p>
                Me verás siempre con la cámara en la mano...
              </p>
            </div>

            {/* Galería */}
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
      <Proyectos />

      {/* EXPERIENCIA */}
      <Experiencia />

      {/* CONTACTO */}
      <section id="contacto" className="contacto">
        <h2>CONTACTO</h2>
        <div className="contacto-content">
          <div className="contacto-info">
            <h3>INFO</h3>
            <p>Viladecans, Barcelona</p>
            <p>Tel. 722730260</p>
            <p>kilianzurera@gmail.com</p>

            <div className="contacto-redes">
              <a
                href="https://instagram.com/kilian.zv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} color="black" />
              </a>
              <a
                href="https://www.strava.com/athletes/59878974"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiStrava size={28} color="#fc4c02" />
              </a>
            </div>
          </div>

          <form className="contacto-form">
            <div className="form-row">
              <input type="text" placeholder="Nombre" required />
              <input type="text" placeholder="Apellidos" required />
            </div>
            <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Mensaje" rows={6} required></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </section>
    </div>
  );
}
