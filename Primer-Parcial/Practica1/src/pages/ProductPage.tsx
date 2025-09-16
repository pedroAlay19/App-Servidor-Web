import React, { useState } from "react";

export const ProductPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    images: string[];
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Atún Fresco",
      description:
        "Atún fresco capturado en las costas de Manta. Ideal para ceviches y platos gourmet.",
      price: 12.99,
      imageUrl:
        "https://images.pexels.com/photos/2042591/pexels-photo-2042591.jpeg?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://images.pexels.com/photos/12273122/pexels-photo-12273122.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/18072771/pexels-photo-18072771.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31639713/pexels-photo-31639713.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      id: 2,
      name: "Camarón Gigante",
      description:
        "Camarón fresco de gran tamaño, perfecto para parrilladas y ceviches de mariscos.",
      price: 18.5,
      imageUrl:
        "https://img.freepik.com/fotos-premium/camarones-grandes-crudos-plato_538646-10093.jpg?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://previews.123rf.com/images/thefinalmiracle/thefinalmiracle1507/thefinalmiracle150700056/43468282-a-background-of-freshly-caught-shrimps-in-a-seaside-fish-market-in-india.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://img.freepik.com/fotos-premium/camarones-crudos-canal-grande-mercado-pescado-asia-primer-plano-monton-langostinos-recien-pescados-concha-mariscos-pesca-india_180532-357.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://st2.depositphotos.com/1037552/7008/i/450/depositphotos_70085789-stock-photo-seafood-market.jpg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      id: 3,
      name: "Pulpo Fresco",
      description:
        "Pulpo fresco de la costa de Manta, perfecto para cocinar a la plancha o en ceviche.",
      price: 14.75,
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/PvP1qdGpvr1yZM9vNj9xcA4MRnz7IBWm91NX7qL981zMn9Namm3c64G2byF_Ggv-jIOSpUGgk-y9SGPIA0uvckwQcCaaIsq8_k2qDODZa6Iy6jRfYw?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://previews.123rf.com/images/alexmgn/alexmgn1802/alexmgn180200010/95731966-close-up-of-fresh-octopus-tentacles-on-the-counter-of-an-italian-fish-market.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://img.freepik.com/fotos-premium/pulpo-sobre-fondo-rustico-negro_220925-27668.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://calidadgourmet.com/wp-content/uploads/2010/07/pulpo.jpg?s=612x612&w=0&k=20&c=x6DqNHDxs9NGDDzRH8PIt_TNLZdqgIMPteYEWOiMzfc=?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      id: 4,
      name: "Langostinos Frescos",
      description:
        "Langostinos frescos de Manta, ideales para parrilladas y platos de mariscos.",
      price: 16.0,
      imageUrl:
        "https://previews.123rf.com/images/karepastock/karepastock1901/karepastock190103034/115077959-prawn-newly-fished-and-stored-in-boxes-with-ice.jpg?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://previews.123rf.com/images/karepastock/karepastock1901/karepastock190103244/115078516-prawn-newly-fished-and-stored-in-boxes-with-ice.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://us.123rf.com/450wm/champsurasan/champsurasan2305/champsurasan230500165/205299922-gambas-a-la-parrilla-en-una-parrilla-de-cerca.jpg?ver=6?auto=compress&cs=tinysrgb&w=600",
        "https://us.123rf.com/450wm/elenvd/elenvd2104/elenvd210400017/168501908-langostinos-en-hielo-camarones-frescos-crudos-enteros-refrigerados-en-el-mercado-de-pescado.jpg?ver=6?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      id: 5,
      name: "Salmón",
      description:
        "Salmón ahumado listo para servir, fresco y delicioso, perfecto para aperitivos y ensaladas.",
      price: 22.5,
      imageUrl:
        "https://previews.123rf.com/images/libertos/libertos1604/libertos160400013/54882170-female-freshly-caught-pink-salmon-salmon-lying-on-the-grass.jpg?auto=compress&cs=tinysrgb&w=600",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFOr_o0v0YpkJp9Irgl5elvTsMylYGLVGVdQ&s?auto=compress&cs=tinysrgb&w=600",
        "https://thumbs.dreamstime.com/b/rosa-de-color-salm%C3%B3n-reci%C3%A9n-pescado-29080443.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://img.freepik.com/fotos-premium/pescados-color-salmon-frescos-hielo-mercado-o-tienda_49947-35.jpg?w=360?auto=compress&cs=tinysrgb&w=600",
      ],
    },
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage(product.imageUrl);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* Lista de productos */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-blue-600 font-bold mt-1">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Detalles del producto seleccionado */}
      {selectedProduct && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src={selectedImage}
              alt={selectedProduct.name}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="flex mt-4 space-x-4">
              {selectedProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Vista ${i + 1}`}
                  className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
