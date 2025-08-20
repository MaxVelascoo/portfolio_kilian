import Image from "next/image";
import Proyectos from "@/components/Proyectos";
import { FaInstagram } from "react-icons/fa";
import { SiStrava } from "react-icons/si";


export default function HomePage() {
  return (
    <div>
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
            {/* Card de presentación */}
            <div className="sobre-mi-card main-card">
              <h2>SOBRE MÍ</h2>
              <p>
                Soy Kilian Zurera Vizuete, especialista en comunicación digital
                y creador de contenidos. Tras una etapa de prácticas en el
                departamento de marketing de Yaskawa Ibérica y experiencias
                reales gestionando proyectos en carretera y en ferias, ofrezco
                servicios de community management, producción y edición de
                vídeo, fotografía corporativa, gestión de redes y soporte en CRM
                y logística de eventos.
              </p>
              <p>
                Me verás siempre con la cámara en la mano: me gusta documentar
                procesos, contar historias visuales y transformar ese material
                en piezas que conecten con audiencias reales.
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
      <Proyectos />

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

      {/* CONTACTO */}
      <section id="contacto" className="contacto">
        <h2>CONTACTO</h2>
        <div className="contacto-content">
          
          {/* INFO IZQUIERDA */}
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
                <FaInstagram size={28} color="white" />
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
      
          {/* FORMULARIO DERECHA */}
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
