import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <main className="bg-blue-50 min-h-screen">
      {/* Hero / Sección principal */}
      <section
        className="relative h-screen flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3758921/pexels-photo-3758921.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Productos Frescos de Manta
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Apoya a los pescadores y productores locales mientras disfrutas de los mejores productos del mar.
          </p>
          <a
            href="#products"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition"
          >
            Explorar Productos
          </a>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Por qué elegir Manta Local</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://images.pexels.com/photos/3296278/pexels-photo-3296278.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Frescura Garantizada"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Frescura Garantizada</h3>
            <p className="text-gray-700">
              Todos los productos son capturados y recolectados directamente de Manta para asegurar frescura y calidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://images.pexels.com/photos/2773943/pexels-photo-2773943.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Apoyo Local"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Apoyo a la Comunidad</h3>
            <p className="text-gray-700">
              Con tu compra apoyas a pescadores y productores locales, fomentando el desarrollo de la ciudad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <img
              src="https://images.pexels.com/photos/208450/pexels-photo-208450.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Entrega Rápida"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
            <p className="text-gray-700">
              Entregamos tus productos frescos directamente a tu puerta, asegurando rapidez y confiabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Productos Destacados */}
      <section id="products" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/12273122/pexels-photo-12273122.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Atún Fresco"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Atún Fresco</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://img.freepik.com/fotos-premium/camarones-crudos-canal-grande-mercado-pescado-asia-primer-plano-monton-langostinos-recien-pescados-concha-mariscos-pesca-india_180532-357.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Camarón Gigante"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Camarón Gigante</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://previews.123rf.com/images/alexmgn/alexmgn1802/alexmgn180200010/95731966-close-up-of-fresh-octopus-tentacles-on-the-counter-of-an-italian-fish-market.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Pulpo Fresco"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Pulpo Fresco</h3>
          </div>
        </div>
      </section>

      {/* Sección de Contacto / Call to Action */}
      <section
        className="relative py-20 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3758943/pexels-photo-3758943.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Conviértete en cliente y apoya a los productores locales de Manta.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-blue-600 font-bold rounded-full hover:bg-blue-700 transition"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </main>
  );
};
