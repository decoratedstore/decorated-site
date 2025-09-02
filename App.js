import { useState } from "react";
import { motion } from "framer-motion";

// 30 sample products with 3 images each (replace or expand as needed)
const products = [
  { id: 1, name: "LED Strip Lights", images: [
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3cb",
      "https://images.unsplash.com/photo-1620051809058-2c67a6e61f77",
      "https://images.unsplash.com/photo-1599955049708-c9e3a9a303a7"
    ] },
  { id: 2, name: "Neon Wall Sign", images: [
      "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d5",
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe5",
      "https://images.unsplash.com/photo-1585079544380-bc703f2b3f48"
    ] },
  { id: 3, name: "Floating Shelves", images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1598300053101-5b4f85e8d3cb",
      "https://images.unsplash.com/photo-1600180758895-1c7f7d8eb6a1"
    ] },
  { id: 4, name: "Decorative Mirror", images: [
      "https://images.unsplash.com/photo-1618220831497-0c62f8e7b0cf",
      "https://images.unsplash.com/photo-1618220831467-0c62f8e7b0cd",
      "https://images.unsplash.com/photo-1618220831447-0c62f8e7b0ce"
    ] },
  { id: 5, name: "Wall Clock", images: [
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3cc",
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3cd",
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3ce"
    ] },
  { id: 6, name: "Indoor Plant", images: [
      "https://images.unsplash.com/photo-1585079544380-bc703f2b3f49",
      "https://images.unsplash.com/photo-1585079544380-bc703f2b3f50",
      "https://images.unsplash.com/photo-1585079544380-bc703f2b3f51"
    ] },
  { id: 7, name: "Cushion Set", images: [
      "https://images.unsplash.com/photo-1598300053101-5b4f85e8d3cc",
      "https://images.unsplash.com/photo-1598300053101-5b4f85e8d3cd",
      "https://images.unsplash.com/photo-1598300053101-5b4f85e8d3ce"
    ] },
  { id: 8, name: "Table Lamp", images: [
      "https://images.unsplash.com/photo-1600180758895-1c7f7d8eb6b1",
      "https://images.unsplash.com/photo-1600180758895-1c7f7d8eb6b2",
      "https://images.unsplash.com/photo-1600180758895-1c7f7d8eb6b3"
    ] },
  { id: 9, name: "Area Rug", images: [
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3cf",
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3d0",
      "https://images.unsplash.com/photo-1598300053066-4b4f85e8d3d1"
    ] },
  { id: 10, name: "Wall Art", images: [
      "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d6",
      "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7",
      "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d8"
    ] },
  // Add remaining 20 products following the same format...
];

export default function Page() {
  const [carouselIndex, setCarouselIndex] = useState({});

  const prevImage = (id, length) => {
    setCarouselIndex(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === 0 ? length - 1 : (prev[id] || 0) - 1
    }));
  };

  const nextImage = (id, length) => {
    setCarouselIndex(prev => ({
      ...prev,
      [id]: (prev[id] || 0) === length - 1 ? 0 : (prev[id] || 0) + 1
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold">Decorated</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-32 bg-gradient-to-r from-gray-100 via-white to-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Transform Your Space
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg md:text-xl max-w-xl mx-auto text-gray-700"
        >
          Curated home decor pieces to elevate your living space.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Explore Collection
        </motion.button>
      </section>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-white relative"
          >
            <div className="relative">
              <img
                src={product.images[carouselIndex[product.id] || 0]}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {/* Carousel Arrows */}
              <button
                onClick={() => prevImage(product.id, product.images.length)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-90"
              >
                ◀
              </button>
              <button
                onClick={() => nextImage(product.id, product.images.length)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-90"
              >
                ▶
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <button className="mt-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition">
                Discover More
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t mt-10">
        © {new Date().getFullYear()} Decorated. All rights reserved.
      </footer>
    </div>
  );
}

