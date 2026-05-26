// components/HeroSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with specified blue color #3488AE */}
      <div className="absolute inset-0" style={{ backgroundColor: '#3488AE' }}>
        {/* Glass overlay with shine effect */}
        <div className="absolute inset-0 glass-overlay">
          <div className="glass-shine"></div>
        </div>
        
        {/* Solar panel pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div>
        </div>
        
        {/* Yellow Sun icon */}
        <div className="absolute top-20 right-20" style={{ color: '#FFD700' }}>
          <svg className="w-64 h-64" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        
        {/* Animated Clouds */}
        <div className="absolute top-24 left-10 text-white opacity-20 animate-drift drift-delay-1">
          <svg className="w-48 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
          </svg>
        </div>
        
        <div className="absolute top-36 right-1/4 text-white opacity-15 animate-drift drift-delay-2">
          <svg className="w-32 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
          </svg>
        </div>
        
        <div className="absolute top-12 left-1/3 text-white opacity-10 animate-drift">
          <svg className="w-40 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
          </svg>
        </div>
        
        {/* Green waves at the bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="#4ade80" 
              fillOpacity="0.3" 
              d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,208C672,203,768,149,864,138.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="#22c55e"
              fillOpacity="0.2" 
              d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,186.7C672,203,768,213,864,197.3C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="w-full md:w-3/5 text-white z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Powering Tomorrow with <span style={{ color: '#FFD700' }}>Renewable Energy</span> Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              We design, develop, and implement sustainable energy systems tailored to your needs, from solar installations to hydropower projects.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="btn-primary"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="btn-outline"
              >
                Get in Touch
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
          </div>
          
          {/* Right side - no floating elements or circles */}
          <div className="w-full md:w-2/5 mt-12 md:mt-0 z-10">
            <div className="relative h-80 md:h-96 flex items-center justify-center">
              {/* Keep this empty as requested */}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes with CSS */}
      <style jsx>{`
        /* Glass overlay styles */
        .glass-overlay {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(0.5px);
          pointer-events: none;
        }
        
        /* Glass shine effect */
        .glass-shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.25) 40%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 55%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: glass-shine 8s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes glass-shine {
          0%, 15% { 
            transform: translate(-100%, -100%) rotate(30deg);
            opacity: 0;
          }
          20% { 
            opacity: 1;
          }
          50% { 
            transform: translate(50%, 50%) rotate(30deg);
            opacity: 1;
          }
          65%, 100% { 
            transform: translate(100%, 100%) rotate(30deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        .animate-drift {
          animation: drift 20s ease-in-out infinite alternate;
        }
        .drift-delay-1 {
          animation-delay: 0s;
        }
        .drift-delay-2 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;