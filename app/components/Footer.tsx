'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Products', href: '#products' },
        { label: 'Sustainability', href: '#sustainability' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Get Quote', href: '#contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Flowers', href: '#products' },
        { label: 'Vegetables', href: '#products' },
        { label: 'Fruits', href: '#products' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/terabloomkenya' },
    { icon: FaTwitter, href: 'https://twitter.com/terabloomkenya' },
    { icon: FaInstagram, href: 'https://instagram.com/terabloomkenya' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/terabloomkenya' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Peri Limited</h3>
            <p className="text-gray-400 mb-4">
              Leading the way in sustainable horticulture and agricultural excellence in Kenya.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-heading font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-400">Kitale, Kenya</span>
              </li>
              <li className="flex items-start space-x-3">
                <PhoneIcon className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-400">+254 700 000 000</span>
              </li>
              <li className="flex items-start space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 mt-1" />
                <a 
                  href="mailto:info@perilimited.co.ke"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@perilimited.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Peri Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 