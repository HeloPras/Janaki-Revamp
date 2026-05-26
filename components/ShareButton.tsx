// components/ShareButton.tsx
'use client';

import React, { useState } from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'minimal' | 'floating';
  size?: 'small' | 'medium' | 'large';
}

const ShareButton: React.FC<ShareButtonProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Check out this article',
  description = '',
  className = '',
  variant = 'default',
  size = 'medium'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Color palette from loading screen
  const primaryBlue = "#3489AE";
  const secondaryBlue = "#2C6B7A";
  const primaryGreen = "#4ade80";
  const secondaryGreen = "#22c55e";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: '#1877F2',
      hoverColor: '#166FE5'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: '#1DA1F2',
      hoverColor: '#1A94DA'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: '#0A66C2',
      hoverColor: '#004182'
    },
    {
      name: 'Email',
      icon: Mail,
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: primaryBlue,
      hoverColor: secondaryBlue
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12'
  };

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  };

  // Floating variant
  if (variant === 'floating') {
    return (
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
            style={{ 
              backgroundColor: primaryBlue,
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = secondaryBlue;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = primaryBlue;
            }}
          >
            <Share2 size={iconSizes[size]} className="text-white" />
          </button>
          
          {isOpen && (
            <div className="flex flex-col space-y-2 animate-in slide-in-from-right duration-300">
              {shareLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleShare(link.url)}
                  className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110`}
                  style={{ backgroundColor: link.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = link.hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = link.color;
                  }}
                  title={`Share on ${link.name}`}
                >
                  <link.icon size={iconSizes[size] - 4} className="text-white" />
                </button>
              ))}
              
              <button
                onClick={handleCopyLink}
                className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110`}
                style={{ backgroundColor: copied ? primaryGreen : primaryBlue }}
                title="Copy link"
              >
                {copied ? (
                  <Check size={iconSizes[size] - 4} className="text-white" />
                ) : (
                  <LinkIcon size={iconSizes[size] - 4} className="text-white" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <Share2 size={iconSizes[size]} />
          <span className="text-sm font-medium">Share</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex space-x-2 z-10">
            {shareLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleShare(link.url)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: link.color }}
                title={`Share on ${link.name}`}
              >
                <link.icon size={14} className="text-white" />
              </button>
            ))}
            
            <button
              onClick={handleCopyLink}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ backgroundColor: copied ? primaryGreen : primaryBlue }}
              title="Copy link"
            >
              {copied ? (
                <Check size={14} className="text-white" />
              ) : (
                <LinkIcon size={14} className="text-white" />
              )}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: primaryBlue }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = secondaryBlue;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = primaryBlue;
        }}
      >
        <Share2 size={iconSizes[size]} />
        <span>Share Article</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[280px] z-10">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">Share this article</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            {shareLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleShare(link.url)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: link.color }}
                >
                  <link.icon size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">{link.name}</span>
              </button>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: copied ? primaryGreen : primaryBlue }}
              >
                {copied ? (
                  <Check size={16} className="text-white" />
                ) : (
                  <LinkIcon size={16} className="text-white" />
                )}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {copied ? 'Link copied!' : 'Copy link'}
              </span>
            </button>
          </div>
        </div>
      )}
      
      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ShareButton;