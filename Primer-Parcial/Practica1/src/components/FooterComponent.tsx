import React from "react";

export const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Información del Marketplace */}
        <div>
          <h3 className="text-xl font-bold mb-4">Manta Local</h3>
          <p className="text-gray-200 leading-relaxed">
            Tu marketplace de productos frescos de Manta. Apoyamos a los pescadores y productores locales, entregando frescura y calidad directamente a tu puerta.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Enlaces</h3>
          <ul className="text-gray-200 space-y-2">
            <li>
              <a href="/" className="hover:text-blue-300 transition">Inicio</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300 transition">Sobre Nosotros</a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-300 transition">Productos</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300 transition">Contáctanos</a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:text-blue-300 transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.88v-6.99H7.9v-2.89h2.54V9.42c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.26 22 17.09 22 12.07z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.37 8.57 8.57 0 01-2.7 1.03 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.57 8.57 0 012 19.54a12.07 12.07 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.37-.02-.56A8.7 8.7 0 0022.46 6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Manta Local. Todos los derechos reservados.
      </div>
    </footer>
  );
};
