'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

interface GalleryImage {
  id: string;
  src: string;
}

const galleryImages: GalleryImage[] = [
  // Solidago Flowers
  {
    id: 'solidago-1',
    src: '/images/solidago flower variety-floriculture/IMG-20250504-WA0015.jpg'
  },
  
  // Hypericum Flowers
  {
    id: 'hypericum-1',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0014.jpg'
  },
  {
    id: 'hypericum-2',
    src: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0010.jpg'
  },
  {
    id: 'hypericum-3',
    src: '/images/hypericum flowers after flowering fruiting and finally harvrsting/IMG-20250504-WA0003.jpg'
  },
  
  // French Beans
  {
    id: 'beans-1',
    src: '/images/french beans-vegetables/photo_2025-05-04_14-24-16.jpg'
  },
  {
    id: 'beans-2',
    src: '/images/french beans-vegetables/IMG-20250504-WA0022.jpg'
  },
  
  // Coffee
  {
    id: 'coffee-1',
    src: '/images/coffee/IMG-20250504-WA0000.jpg'
  },
  {
    id: 'coffee-2',
    src: '/images/coffee/IMG-20250504-WA0001.jpg'
  },
  
  // Cabbage
  {
    id: 'cabbage-1',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0017.jpg'
  },
  {
    id: 'cabbage-2',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0018.jpg'
  },
  
  // Farm Location
  {
    id: 'farm-1',
    src: '/images/farm location/IMG-20250504-WA0023.jpg'
  },
  {
    id: 'farm-2',
    src: '/images/farm location/IMG-20250504-WA0025.jpg'
  }
];

const GalleryComponent: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrevious,
    trackMouse: true
  });

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Gallery</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Explore our farm through these beautiful images showcasing our products and facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openGallery(image, index)}
            >
              <Image
                src={image.src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" {...handlers}>
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            >
              ×
            </button>
            <button
              onClick={showPrevious}
              className="absolute left-4 text-white text-4xl hover:text-gray-300"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-4xl hover:text-gray-300"
            >
              ›
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt="Gallery image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryComponent; 