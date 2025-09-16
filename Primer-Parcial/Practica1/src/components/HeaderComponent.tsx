// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

export const HeaderComponent: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          MantaMarket
        </Link>

        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Inicio
          </Link>
          <Link to="/product" className="text-gray-600 hover:text-gray-900 transition-colors">
            Producto
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            Sobre Nosotros
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};
