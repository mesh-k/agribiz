'use client';

import React, { useState, useEffect, useRef, lazy, Suspense, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

// Lazy load the slides data
const slides = [
  {
    image: "/images/hero page/IMG-20250504-WA0023.jpg",
    title: "Sustainable Agriculture",
    subtitle: "Growing for the Future",
    description: "Discover our commitment to eco-friendly farming practices that nourish both people and planet.",
    cta: "Learn More",
    link: "/#sustainability"
  },
  {
    image: "/images/hero page/IMG-20250504-WA0021.jpg",
    title: "Fresh Organic Produce",
    subtitle: "From Farm to Table",
    description: "Experience the difference with our premium quality, pesticide-free fruits and vegetables.",
    cta: "View Products",
    link: "/#products"
  },
  {
    image: "/images/hero page/IMG-20250504-WA0005.jpg",
    title: "Premium Flowers",
    subtitle: "Nature's Finest",
    description: "Explore our collection of beautiful flowers grown with care and expertise.",
    cta: "Explore Gallery",
    link: "/#gallery"
  },
  {
    image: "/images/hero page/IMG-20250504-WA0016.jpg",
    title: "Community Supported",
    subtitle: "Join Our Movement",
    description: "Become part of our growing community of sustainable agriculture supporters.",
    cta: "Get Involved",
    link: "/#contact"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
  }, [isPaused]);

  useEffect(() => {
    if (isVisible) {
      startTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, startTimer]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
    startTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
    startTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
    startTimer();
  };

  return (
    <section ref={heroRef} className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={slides[currentSlide].link}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              {slides[currentSlide].cta}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 container">
        <div className="flex justify-between items-center">
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Controls */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-sm font-medium tracking-wider">Scroll</span>
        <FiArrowDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;