"use client";

import { useState } from "react";

interface Cliente {
  usuario: string;
  img: string;
  descripcion: string;
}

const clientes: Cliente[] = [
  {
    usuario: "@josemaria_lpz",
    img: "/avatars/josemaria_lpz.jpg",
    descripcion:
      "Gestioné sus redes sociales durante 6 meses aumentando el engagement un 40%.",
  },
  {
    usuario: "@pitufollow",
    img: "/avatars/pitufollow.jpg",
    descripcion:
      "Campaña de branding y diseño de estrategia digital para aumentar su alcance.",
  },
  {
    usuario: "@adrii.gutiierrez_",
    img: "/avatars/adrii.gutiierrez_.jpg",
    descripcion:
      "Colaboración en gestión de contenidos y community building.",
  },
  {
    usuario: "@prattriatlo",
    img: "/avatars/prattriatlo.jpg",
    descripcion: "Cobertura de eventos deportivos y estrategia de RRSS.",
  },
  {
    usuario: "@yaskawaiberica",
    img: "/avatars/yaskawaiberica.jpg",
    descripcion: "Prácticas en su departamento de marketing.",
  },
  {
    usuario: "@bysergimas",
    img: "/avatars/bysergimas.jpg",
    descripcion: "Producción audiovisual y apoyo en estrategia de marca.",
  },
  {
    usuario: "@nometoqueslasruedas",
    img: "/avatars/nometoqueslasruedas.jpg",
    descripcion: "Gestión de comunidad ciclista y creación de contenido.",
  },
  {
    usuario: "@carlosaizpun_bike",
    img: "/avatars/carlosaizpun_bike.jpg",
    descripcion: "Promoción personal y de marca en redes sociales.",
  },
];

export default function Proyectos() {
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

  return (
    <section id="proyectos" className="proyectos">
      <h2>PROYECTOS Y EXPERIENCIAS</h2>
      <div className="proyectos-grid">
        {clientes.map((cliente) => (
          <button
            key={cliente.usuario}
            className="proyecto-btn"
            onClick={() => setSelectedCliente(cliente)}
          >
            <img src={cliente.img} alt={cliente.usuario} />
            <p>{cliente.usuario}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedCliente && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCliente(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCliente.img}
              alt={selectedCliente.usuario}
              className="modal-img"
            />
            <h3>{selectedCliente.usuario}</h3>
            <p>{selectedCliente.descripcion}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedCliente(null)}
            >
              Cerrar
            </button>
            <button
              className="view_more-btn"
              onClick={() => setSelectedCliente(null)}
            >
              Ver más
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
