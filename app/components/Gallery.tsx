'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const openGallery = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    // Prevent body scroll when gallery is open
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

  // Enhanced touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }
    
    setTouchStart(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrevious();
      if (e.key === 'Escape') closeGallery();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openGallery(image, index)}
            >
              <Image
                src={image.src}
                alt="Gallery image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                onLoadingComplete={() => setIsLoading(false)}
                priority={index < 6} // Prioritize loading first 6 images
              />
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors duration-300 z-50 p-2"
              aria-label="Close gallery"
            >
              <svg 
                className="w-6 h-6 md:w-8 md:h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            <button
              onClick={showPrevious}
              className="absolute left-2 md:left-6 text-white hover:text-gray-300 transition-colors duration-300 z-50 p-2"
              aria-label="Previous image"
            >
              <svg 
                className="w-8 h-8 md:w-12 md:h-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            <button
              onClick={showNext}
              className="absolute right-2 md:right-6 text-white hover:text-gray-300 transition-colors duration-300 z-50 p-2"
              aria-label="Next image"
            >
              <svg 
                className="w-8 h-8 md:w-12 md:h-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>

            <motion.div 
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            >
              <Image
                src={selectedImage.src}
                alt="Gallery image"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Enhanced Image counter */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GalleryComponent; 