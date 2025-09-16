import React from "react";

export const AboutUs: React.FC = () => {
  return (
    <main className="bg-blue-50 min-h-screen py-20">
      {/* Hero / Título */}
      <section
        className="text-center mb-16 px-6 py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3758921/pexels-photo-3758921.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Conoce Manta Local
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md">
          Un marketplace que conecta a los mejores productores y pescadores locales de Manta
        </p>
      </section>

      {/* Historia */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
        <p className="text-gray-700 leading-relaxed">
          Nació con la idea de acercar los productos locales de Manta a todos, desde el pescado fresco,
          mariscos, hasta frutas y verduras cultivadas en la región. Queremos que cada cliente
          disfrute de la frescura y calidad de los productos locales mientras apoyamos a nuestros
          productores y pescadores.
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="container mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-4">Nuestra Misión</h3>
          <p className="text-gray-700">
            Conectar a los productores locales de Manta con los clientes, ofreciendo productos frescos,
            de calidad y promoviendo el desarrollo sostenible de nuestra comunidad.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-4">Nuestra Visión</h3>
          <p className="text-gray-700">
            Ser el marketplace líder de productos locales en Manta, reconocidos por la frescura,
            confianza y apoyo a los productores de la región.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Miembro del equipo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Pedro López</h3>
            <p className="text-gray-700">CEO & Fundador</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Miembro del equipo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Ana Torres</h3>
            <p className="text-gray-700">Directora de Operaciones Locales</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Miembro del equipo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Luis García</h3>
            <p className="text-gray-700">Marketing & Estrategia Local</p>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="container mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Algunos de nuestros Productos Locales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/3296278/pexels-photo-3296278.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Atún Fresco"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Atún Fresco</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://img.freepik.com/fotos-premium/camarones-grandes-crudos-plato_538646-10093.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Camarón Gigante"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Camarón Gigante</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://lh3.googleusercontent.com/proxy/PvP1qdGpvr1yZM9vNj9xcA4MRnz7IBWm91NX7qL981zMn9Namm3c64G2byF_Ggv-jIOSpUGgk-y9SGPIA0uvckwQcCaaIsq8_k2qDODZa6Iy6jRfYw?auto=compress&cs=tinysrgb&w=600"
              alt="Pulpo Fresco"
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="font-bold">Pulpo Fresco</h3>
          </div>
        </div>
      </section>
    </main>
  );
};
