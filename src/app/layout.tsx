import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaVimeoV, FaYoutube } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Kilian",
  description: "Sitio web personal y portafolio de Kilian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Cabecera */}
        <header className="header">
          {/* Redes sociales */}
          <div className="social">
            <Link href="https://facebook.com" target="_blank"><FaFacebook /></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
            <Link href="https://vimeo.com" target="_blank"><FaVimeoV /></Link>
            <Link href="https://youtube.com" target="_blank"><FaYoutube /></Link>
          </div>

          {/* Navegación */}
          <nav className="nav">
            <a href="#inicio" className="active">Inicio</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#quiromasajista">Quiromasajista</a>
          </nav>
        </header>
        

        {/* Contenido principal */}
        <main>{children}</main>
      </body>
    </html>
  );
}
