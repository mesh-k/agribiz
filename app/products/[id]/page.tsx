'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Product descriptions
const productDetails = {
  1: {
    name: 'Solidago',
    category: 'Flowers',
    image: '/images/solidago flower variety-floriculture/IMG-20250504-WA0015.jpg',
    description: 'Solidago, also known as goldenrod, is a beautiful flowering plant that adds vibrant yellow color to any arrangement. Our Solidago is grown with care to ensure long-lasting blooms and excellent vase life. Perfect for both fresh and dried flower arrangements.',
    features: [
      'Vibrant yellow blooms',
      'Long vase life',
      'Excellent for drying',
      'Sustainable farming practices'
    ]
  },
  2: {
    name: 'Hypericum',
    category: 'Flowers',
    image: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0010.jpg',
    description: 'Hypericum, commonly known as St. John\'s Wort, is prized for its unique berries and foliage. Our Hypericum plants produce beautiful berries in various colors, making them perfect for floral arrangements and decorative purposes.',
    features: [
      'Colorful berries',
      'Long-lasting cut stems',
      'Versatile in arrangements',
      'Year-round availability'
    ]
  },
  3: {
    name: 'French Beans',
    category: 'Vegetables',
    image: '/images/french beans-vegetables/photo_2025-05-04_14-24-16.jpg',
    description: 'Our French Beans are grown using sustainable farming methods, ensuring premium quality and taste. These tender, crisp beans are perfect for both fresh consumption and processing, meeting international quality standards.',
    features: [
      'Premium quality',
      'Consistent size and shape',
      'Excellent shelf life',
      'GAP certified'
    ]
  },
  4: {
    name: 'Cabbage',
    category: 'Vegetables',
    image: '/images/cabbage-vegetables/IMG-20250504-WA0017.jpg',
    description: 'Our cabbage is grown in optimal conditions to ensure firm, dense heads with excellent flavor. Perfect for both fresh market and processing, our cabbage meets the highest quality standards.',
    features: [
      'Firm, dense heads',
      'Excellent shelf life',
      'Consistent quality',
      'Sustainable farming'
    ]
  },
  5: {
    name: 'Coffee',
    category: 'Horticulture',
    image: '/images/coffee/IMG-20250504-WA0000.jpg',
    description: 'Our coffee plants are grown in the ideal conditions of Kitale\'s highlands. We cultivate premium Arabica varieties known for their exceptional flavor profiles and quality.',
    features: [
      'Arabica varieties',
      'High-altitude grown',
      'Premium quality beans',
      'Sustainable cultivation'
    ]
  }
};

const ProductPage = () => {
  const params = useParams();
  const productId = Number(params.id);
  const product = productDetails[productId as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/#products" className="text-primary hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/#products" className="text-primary hover:underline mb-8 inline-block">
            ← Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Interested in this product?</h2>
                <p className="mb-4">Contact us for pricing and availability.</p>
                <Link
                  href="/#contact"
                  className="btn-primary inline-block"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPage; 