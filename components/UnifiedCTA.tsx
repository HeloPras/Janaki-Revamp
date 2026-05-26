'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Users, CheckCircle } from 'lucide-react';

interface CTAProps {
  variant?: 'primary' | 'secondary' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const UnifiedCTA: React.FC<CTAProps> = ({ 
  variant = 'primary', 
  size = 'medium',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'py-12 px-6',
    medium: 'py-16 px-6 sm:px-8',
    large: 'py-20 px-6 sm:px-8 lg:px-12'
  };

  const containerClasses = {
    primary: 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white',
    secondary: 'bg-gradient-to-br from-blue-50 to-gray-50 text-gray-900',
    minimal: 'bg-white text-gray-900 border-t border-gray-200'
  };

  if (variant === 'minimal') {
    return (
      <section className={`${sizeClasses[size]} ${containerClasses[variant]} ${className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the renewable energy revolution with Nepal's most trusted energy partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card - Using Original Design */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-xl">
          {/* Background elements - Original Style */}
          <div className="absolute inset-0 overflow-hidden">
            <Zap className="absolute -top-8 -right-8 text-yellow-300 opacity-15 w-40 h-40 md:w-56 md:h-56" />
            <Users className="absolute -bottom-20 right-20 text-blue-300 opacity-15 w-40 h-40 rotate-12" />
            <CheckCircle className="absolute bottom-10 -left-10 text-green-300 opacity-15 w-32 h-32" />
            
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/30 to-transparent"></div>
          </div>
          
          <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Transform Your Energy Future?
            </h2>
            
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Join us in creating a sustainable tomorrow with innovative energy solutions tailored to your specific needs.
            </p>
            
            <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
                <Zap className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedCTA;