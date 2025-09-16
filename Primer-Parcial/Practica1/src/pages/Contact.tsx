import React from "react";

export const Contact: React.FC = () => {
  return (
    <main className="bg-blue-50 min-h-screen">
      {/* Hero / Sección principal */}
      <section
        className="relative h-64 md:h-80 flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3758921/pexels-photo-3758921.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            ¿Tienes dudas o quieres trabajar con nosotros? Escríbenos.
          </p>
        </div>
      </section>

      {/* Formulario y Contacto */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Formulario */}
        <form className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un Mensaje</h2>
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Nombre</span>
            <input
              type="text"
              placeholder="Tu nombre"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Email</span>
            <input
              type="email"
              placeholder="tu@email.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Mensaje</span>
            <textarea
              placeholder="Escribe tu mensaje..."
              rows={5}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2"
            ></textarea>
          </label>

          <button className="mt-6 w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Enviar Mensaje
          </button>
        </form>

        {/* Información de Contacto */}
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestro Contacto</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> info@mantalocal.com
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Teléfono:</span> +593 9 123 4567
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Dirección:</span> Av. Principal #123, Manta
          </p>
          <p className="text-gray-700 mt-4">Síguenos en nuestras redes:</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
