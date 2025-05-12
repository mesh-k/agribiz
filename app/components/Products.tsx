'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

const products: Product[] = [
  // Flowers Category
  {
    id: 1,
    name: 'Solidago',
    category: 'Flowers',
    description: '',
    image: '/images/solidago flower variety-floriculture/IMG-20250504-WA0015.jpg',
  },
  {
    id: 2,
    name: 'Hypericum',
    category: 'Flowers',
    description: '',
    image: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0010.jpg',
  },

  // Vegetables Category
  {
    id: 3,
    name: 'French Beans',
    category: 'Vegetables',
    description: '',
    image: '/images/french beans-vegetables/photo_2025-05-04_14-24-16.jpg',
  },
  {
    id: 4,
    name: 'Cabbage',
    category: 'Vegetables',
    description: '',
    image: '/images/cabbage-vegetables/IMG-20250504-WA0017.jpg',
  },
  // Horticulture Category
  {
    id: 5,
    name: 'Coffee',
    category: 'Horticulture',
    description: '',
    image: '/images/coffee/IMG-20250504-WA0000.jpg',
  }
];

const categories = ['All', 'Flowers', 'Vegetables', 'Horticulture'];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Products</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Discover our premium horticulture products, grown with sustainable practices and delivered with excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.svg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">{product.name}</h3>
                <Link
                  href={`/products/${product.id}`}
                  className="btn-primary w-full"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 