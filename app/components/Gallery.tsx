'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  caption: string;
}

const categories = ['All', 'Flowers', 'Vegetables', 'Horticulture', 'Farm'];

const galleryImages: GalleryImage[] = [
  // Solidago Flowers
  {
    id: 'solidago-1',
    src: '/images/solidago flower variety-floriculture/IMG-20250504-WA0015.jpg',
    category: 'Flowers',
    caption: 'Solidago flowers in full bloom - a beautiful variety of goldenrod',
  },
  
  // Hypericum Flowers - Before Flowering
  {
    id: 'hypericum-before-1',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0014.jpg',
    category: 'Flowers',
    caption: 'Hypericum plants in early growth stage',
  },
  {
    id: 'hypericum-before-2',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0006.jpg',
    category: 'Flowers',
    caption: 'Young Hypericum plants showing healthy foliage',
  },
  {
    id: 'hypericum-before-3',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0007.jpg',
    category: 'Flowers',
    caption: 'Hypericum plants in development stage',
  },
  {
    id: 'hypericum-before-4',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0008.jpg',
    category: 'Flowers',
    caption: 'Healthy Hypericum plants before flowering',
  },
  {
    id: 'hypericum-before-5',
    src: '/images/hypericum flower varirty-floriculture before flowering/IMG-20250504-WA0009.jpg',
    category: 'Flowers',
    caption: 'Hypericum plants in pre-flowering stage',
  },
  
  // Hypericum Flowers - In Bloom
  {
    id: 'hypericum-bloom-1',
    src: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0010.jpg',
    category: 'Flowers',
    caption: 'Hypericum flowers in full bloom',
  },
  {
    id: 'hypericum-bloom-2',
    src: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0011.jpg',
    category: 'Flowers',
    caption: 'Close-up of vibrant Hypericum flowers',
  },
  {
    id: 'hypericum-bloom-3',
    src: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0012.jpg',
    category: 'Flowers',
    caption: 'Hypericum flower field in bloom',
  },
  {
    id: 'hypericum-bloom-4',
    src: '/images/hypericum flower variety-floriculture/IMG-20250504-WA0013.jpg',
    category: 'Flowers',
    caption: 'Beautiful Hypericum flower display',
  },
  
  // Hypericum Flowers - After Flowering
  {
    id: 'hypericum-after-1',
    src: '/images/hypericum flowers after flowering fruiting and finally harvrsting/IMG-20250504-WA0003.jpg',
    category: 'Flowers',
    caption: 'Hypericum plants with developing fruits',
  },
  {
    id: 'hypericum-after-2',
    src: '/images/hypericum flowers after flowering fruiting and finally harvrsting/IMG-20250504-WA0004.jpg',
    category: 'Flowers',
    caption: 'Ripe Hypericum fruits ready for harvest',
  },
  {
    id: 'hypericum-after-3',
    src: '/images/hypericum flowers after flowering fruiting and finally harvrsting/IMG-20250504-WA0005.jpg',
    category: 'Flowers',
    caption: 'Hypericum fruits at harvest stage',
  },
  
  // French Beans
  {
    id: 'beans-1',
    src: '/images/french beans-vegetables/photo_2025-05-04_14-24-16.jpg',
    category: 'Vegetables',
    caption: 'Fresh French beans ready for harvest',
  },
  {
    id: 'beans-2',
    src: '/images/french beans-vegetables/IMG-20250504-WA0022.jpg',
    category: 'Vegetables',
    caption: 'Healthy French bean plants in the field',
  },
  {
    id: 'beans-3',
    src: '/images/french beans-vegetables/IMG-20250504-WA0020.jpg',
    category: 'Vegetables',
    caption: 'French bean plants in growth stage',
  },
  {
    id: 'beans-4',
    src: '/images/french beans-vegetables/IMG-20250504-WA0021.jpg',
    category: 'Vegetables',
    caption: 'French bean field view',
  },
  
  // Coffee Horticulture
  {
    id: 'coffee-1',
    src: '/images/coffee/IMG-20250504-WA0000.jpg',
    category: 'Horticulture',
    caption: 'Coffee plants in our horticulture section',
  },
  {
    id: 'coffee-2',
    src: '/images/coffee/IMG-20250504-WA0001.jpg',
    category: 'Horticulture',
    caption: 'Coffee plantation showing healthy growth',
  },
  {
    id: 'coffee-3',
    src: '/images/coffee/IMG-20250504-WA0002.jpg',
    category: 'Horticulture',
    caption: 'Coffee plants in optimal growing conditions',
  },
  
  // Cabbage
  {
    id: 'cabbage-1',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0017.jpg',
    category: 'Vegetables',
    caption: 'Cabbage field showing excellent growth',
  },
  {
    id: 'cabbage-2',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0018.jpg',
    category: 'Vegetables',
    caption: 'Healthy cabbage plants ready for harvest',
  },
  {
    id: 'cabbage-3',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0019.jpg',
    category: 'Vegetables',
    caption: 'Cabbage plants in development stage',
  },
  {
    id: 'cabbage-4',
    src: '/images/cabbage-vegetables/IMG-20250504-WA0016.jpg',
    category: 'Vegetables',
    caption: 'Cabbage field overview',
  },
  
  // Farm Location
  {
    id: 'farm-1',
    src: '/images/farm location/IMG-20250504-WA0023.jpg',
    category: 'Farm',
    caption: 'Panoramic view of our farm location',
  },
  {
    id: 'farm-2',
    src: '/images/farm location/IMG-20250504-WA0025.jpg',
    category: 'Farm',
    caption: 'Farm infrastructure and facilities',
  },
  {
    id: 'farm-3',
    src: '/images/farm location/IMG-20250504-WA0026.jpg',
    category: 'Farm',
    caption: 'Farm landscape and surroundings',
  }
];

const GalleryComponent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = 320; // w-80 = 20rem = 320px
      const scrollPosition = index * (imageWidth + 24); // 24px is the gap-6
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'ArrowLeft') {
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
        setCurrentIndex(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
        setCurrentIndex(newIndex);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    }
  }, [currentIndex, filteredImages, selectedImage]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedImage) {
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
        setCurrentIndex(newIndex);
      }
    },
    onSwipedRight: () => {
      if (selectedImage) {
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[newIndex]);
        setCurrentIndex(newIndex);
      }
    }
  });

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Gallery</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Explore our world through stunning photos that showcase our farm and products
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

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 min-w-max">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0 w-80"
                  onClick={() => {
                    setSelectedImage(image);
                    setCurrentIndex(index);
                  }}
                >
                  <div className="relative h-80 w-80">
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-center p-4">
                        <p className="text-lg font-heading font-medium">{image.caption}</p>
                        <p className="text-sm mt-2">Click to view</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            {...swipeHandlers}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-heading font-semibold">{selectedImage.caption}</h3>
                <p className="text-gray-600 mt-2">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryComponent; 