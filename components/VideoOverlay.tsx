'use client';

import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';

interface VideoOverlayProps {
  videoSrc: string;
  posterImage?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  videoSrc,
  posterImage,
  title,
  subtitle,
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      setIsLoading(true);
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing video:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{
        background: `linear-gradient(135deg, #3489AE, #2C6B7A)`
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterImage}
        onEnded={handleVideoEnd}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Overlay with Blue-Green Theme */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, rgba(52, 137, 174, 0.4), rgba(44, 107, 122, 0.6))`
          }}
        >
          <div className="text-center text-white">
            {title && (
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-green-200 mb-4">{subtitle}</p>
            )}
            
            <button
              onClick={handlePlayVideo}
              disabled={isLoading}
              className="group relative w-20 h-20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
              style={{
                backgroundColor: 'rgba(74, 222, 128, 0.2)',
                borderColor: '#4ade80'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(74, 222, 128, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(74, 222, 128, 0.2)';
              }}
            >
              {isLoading ? (
                <div className="w-8 h-8 border-2 border-[#4ade80] border-t-transparent rounded-full animate-spin" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1 transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;