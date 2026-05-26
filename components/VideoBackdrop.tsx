// components/VideoBackdrop.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoBackdropProps {
  videoSrc: string;
  posterImage?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  startAt?: number;
  quality?: 'low' | 'medium' | 'high';
  objectFit?: 'cover' | 'contain' | 'fill';
  minHeight?: string;
  darkenVideo?: boolean;
}

const VideoBackdrop: React.FC<VideoBackdropProps> = ({
  videoSrc,
  posterImage,
  overlayColor = '#000000',
  overlayOpacity = 0.5,
  children,
  autoPlay = true,
  muted = true,
  loop = true,
  startAt = 0,
  quality = 'medium',
  objectFit = 'cover',
  minHeight = '100vh',
  darkenVideo = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);

  // Get video resolution based on quality
  const getVideoResolution = () => {
    switch (quality) {
      case 'low': return '480p';
      case 'medium': return '720p';
      case 'high': return '1080p';
      default: return '720p';
    }
  };

  // Set up video element when component mounts
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Set initial video position if specified
      if (startAt > 0 && !isVideoLoaded) {
        videoElement.currentTime = startAt;
      }
      
      // Set up event listeners
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        if (autoPlay) {
          videoElement.play().catch((error) => {
            console.error('Error playing video:', error);
            setIsPlaying(false);
          });
          setIsPlaying(true);
          setShowPlayButton(false);
        }
      };
      
      videoElement.addEventListener('loadeddata', handleLoadedData);
      
      // Clean up event listeners
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [autoPlay, isVideoLoaded, startAt]);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
        setShowPlayButton(true);
      } else {
        videoElement.play().catch(error => {
          console.error('Error playing video:', error);
        });
        setShowPlayButton(false);
      }
      
      setIsPlaying(!isPlaying);
    }
  };

  // Set video filter based on darkenVideo prop
  const videoFilter = darkenVideo ? 'brightness(0.7)' : 'none';

  return (
    <div 
      className="relative overflow-hidden video-section" 
      style={{ minHeight }}
    >
      {/* Loading Overlay with Circle Loader - Blue-Green Theme */}
      {!isVideoLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            background: `linear-gradient(135deg, #3489AE, #2C6B7A, #1E4B52)`
          }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-[#4ade80] border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster={posterImage}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        style={{ 
          objectFit, 
          filter: videoFilter 
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Color Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ 
          backgroundColor: overlayColor,
          opacity: overlayOpacity
        }}
      ></div>

      {/* Center Play Button for Manual Play - Blue-Green Theme */}
      {showPlayButton && isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-15">
          <button
            onClick={togglePlayPause}
            className="group w-24 h-24 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2"
            style={{
              backgroundColor: 'rgba(52, 137, 174, 0.2)',
              borderColor: '#4ade80'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(74, 222, 128, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(52, 137, 174, 0.2)';
            }}
            aria-label="Play video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-1 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Small Control Button (Bottom Right) - Blue-Green Theme */}
      {isVideoLoaded && (
        <button 
          className="absolute bottom-4 right-4 text-white rounded-full p-3 focus:outline-none transition-all duration-300 opacity-70 hover:opacity-100 z-100 cursor-pointer"
          style={{
            backgroundColor: 'rgba(52, 137, 174, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(74, 222, 128, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(52, 137, 174, 0.5)';
          }}
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default VideoBackdrop;