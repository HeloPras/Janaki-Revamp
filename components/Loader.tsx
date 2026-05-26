'use client';

import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  color = '#1092CF',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div 
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-4 rounded-full animate-spin`}
        style={{ borderTopColor: color }}
      />
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-600 font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;