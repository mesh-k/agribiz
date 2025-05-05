'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCounter: React.FC<{
  value: number;
  label: string;
  suffix?: string;
}> = ({ value, label, suffix = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {inView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {value}
            {suffix}
          </motion.span>
        ) : (
          '0'
        )}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Peri Limited</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Discover our commitment to sustainable agriculture and premium quality products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/About/IMG-20250504-WA0011.jpg"
              alt="Peri Limited Farm"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2025, Peri Limited has grown from a small family farm to a leading horticulture exporter. 
              Our commitment to quality and sustainability has earned us recognition in international markets.
            </p>
            <p className="text-muted-foreground mb-8">
              We specialize in premium flowers, fruits, and vegetables, all grown using sustainable practices 
              that protect the environment and support local communities.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <StatCounter value={15} label="Years Experience" suffix="+" />
              <StatCounter value={500} label="Hectares Cultivated" suffix="+" />
              <StatCounter value={30} label="Global Markets" suffix="+" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 