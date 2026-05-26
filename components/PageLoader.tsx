'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading?: boolean;
  onComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  isLoading = true, 
  onComplete 
}) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Show logo after initial delay
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 200);

    return () => {
      clearInterval(timer);
      clearTimeout(logoTimer);
    };
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#3489AE] via-[#2C6B7A] to-[#1E4B52] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Solar Grid Background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(74, 222, 128, 0.4) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(74, 222, 128, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                backgroundPosition: '-1px -1px'
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    duration: 0.6 
                  }}
                  className="mb-8"
                >
                  <div className="w-24 h-24 mx-auto relative mb-4">
                    <motion.div
                      className="w-full h-full rounded-full border-4 border-green-400 border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2 font-playfair">
                Janaki Energy
              </h1>
              <p className="text-green-200 text-lg mb-8">
                Powering Nepal's Future
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="w-80 mx-auto"
            >
              <div className="relative">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-green-200">
                  <span>Loading...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </motion.div>

            {/* Loading Text Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6"
            >
              <motion.p
                className="text-white/80 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Preparing your sustainable energy experience...
              </motion.p>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-6 h-6 bg-green-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-4 h-4 bg-green-500/40 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/3 right-16 w-8 h-8 bg-[#3489AE]/20 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 0.2
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;