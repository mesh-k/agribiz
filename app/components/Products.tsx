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
    name: 'Solidago Flowers',
    category: 'Flowers',
    description: 'Beautiful goldenrod flowers, perfect for floral arrangements and garden displays.',
    image: '/images/solidago flower variety-floriculture/IMG-20250504-WA0015.jpg',
  },
  {
    id: 2,
    name: 'Hypericum Flowers - Blooming',
    category: 'Flowers',
    description: 'Premium quality Hypericum flowers in full bloom, perfect for decorative purposes.',
    image: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0010.jpg',
  },
  {
    id: 3,
    name: 'Hypericum Flowers - Budding',
    category: 'Flowers',
    description: 'Young Hypericum plants showing healthy growth and development.',
    image: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0014.jpg',
  },
  {
    id: 4,
    name: 'Hypericum Flowers - Fruiting',
    category: 'Flowers',
    description: 'Hypericum plants with developing fruits, ready for harvest.',
    image: '/images/hypericum flowers after flowering fruiting and finally harvrsting/IMG-20250504-WA0003.jpg',
  },

  // Vegetables Category
  {
    id: 5,
    name: 'French Beans',
    category: 'Vegetables',
    description: 'Fresh, organic French beans grown using sustainable farming practices.',
    image: '/images/french beans-vegetables/photo_2025-05-04_14-24-16.jpg',
  },
  {
    id: 6,
    name: 'French Beans - Field View',
    category: 'Vegetables',
    description: 'Healthy French bean plants thriving in our fields.',
    image: '/images/french beans-vegetables/IMG-20250504-WA0022.jpg',
  },
  {
    id: 7,
    name: 'Cabbage',
    category: 'Vegetables',
    description: 'Fresh, healthy cabbage grown using organic farming methods.',
    image: '/images/cabbage-vegetables/IMG-20250504-WA0017.jpg',
  },
  {
    id: 8,
    name: 'Cabbage - Field View',
    category: 'Vegetables',
    description: 'Premium quality cabbage plants in our fields.',
    image: '/images/cabbage-vegetables/IMG-20250504-WA0018.jpg',
  },

  // Horticulture Category
  {
    id: 9,
    name: 'Coffee Plants',
    category: 'Horticulture',
    description: 'High-quality coffee plants cultivated in optimal conditions for premium yield.',
    image: '/images/coffee/IMG-20250504-WA0000.jpg',
  },
  {
    id: 10,
    name: 'Coffee Plantation',
    category: 'Horticulture',
    description: 'Our coffee plantation showing healthy growth and development.',
    image: '/images/coffee/IMG-20250504-WA0001.jpg',
  },
  {
    id: 11,
    name: 'Coffee Plants - Close View',
    category: 'Horticulture',
    description: 'Detailed view of our premium coffee plants.',
    image: '/images/coffee/IMG-20250504-WA0002.jpg',
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
                <h3 className="text-xl font-heading font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
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