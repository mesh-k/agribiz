'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SustainabilityCard {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const initiatives: SustainabilityCard[] = [
  {
    title: 'Water Conservation',
    description: 'Implementing drip irrigation systems and water recycling methods to minimize water usage.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop',
    icon: '💧',
  },
  {
    title: 'Organic Farming',
    description: 'Using natural fertilizers and pest control methods to maintain soil health and biodiversity.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop',
    icon: '🌱',
  },
  {
    title: 'Community Development',
    description: 'Supporting local communities through employment opportunities.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    icon: '🤝',
  },
];

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Sustainability</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Our commitment to sustainable farming practices and environmental responsibility
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row justify-center max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group flex-1 flex flex-col items-center text-center p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              tabIndex={0}
              aria-label={initiative.title}
            >
              <div className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{initiative.title}</h3>
              <p className="text-muted-foreground">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability; 