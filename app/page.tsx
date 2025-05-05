'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Map from './components/Map';
import CookieBanner from './components/CookieBanner';
import GetQuote from './components/GetQuote';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Sustainability />
      <Gallery />
      <Map />
      <GetQuote />
      <Footer />
      <CookieBanner />
    </main>
  );
} 