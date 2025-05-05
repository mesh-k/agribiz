'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // For testing purposes, you can uncomment this line to always show the banner
    // localStorage.removeItem('cookieConsent');
    
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking &quot;Accept&quot;, you agree to our use of cookies.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-sm bg-primary rounded hover:bg-primary/90 transition-colors duration-300"
                >
                  Accept All
                </button>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner; 