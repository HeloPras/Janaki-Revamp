// components/ProjectsSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Project interface for project data
interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  year?: string;
  image?: string;
}

// Props interface for component
interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
  projects: Project[];
  showViewAll?: boolean;
  viewAllLink?: string;
  viewAllText?: string;
  itemsToShow?: number;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title = "Our Projects",
  subtitle = "Explore our portfolio of sustainable energy projects that demonstrate our expertise and commitment to innovation.",
  bgColor = "white", 
  textColor = "#3488AE",
  accentColor = "#4ade80",
  projects = [],
  showViewAll = true,
  viewAllLink = "/projects",
  viewAllText = "View All Projects",
  itemsToShow = 3
}) => {
  // State for managing carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsToShow);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate total number of slides
  const totalSlides = Math.ceil(projects.length / visibleItems);
  
  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(itemsToShow);
      }
    };
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Set up autoplay if not hovering
    if (!isHovering) {
      startAutoplay();
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [itemsToShow, isHovering]);
  
  // Start autoplay function
  const startAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  
  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };
  
  // Resume autoplay when not hovering
  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoplay();
  };
  
  // Navigate to next slide
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (activeIndex >= totalSlides - 1) {
      // Reset to first slide with animation
      setActiveIndex(0);
    } else {
      // Move to next slide
      setActiveIndex(activeIndex + 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match with transition duration
  };
  
  // Navigate to previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (activeIndex <= 0) {
      // Go to last slide with animation
      setActiveIndex(totalSlides - 1);
    } else {
      // Move to previous slide
      setActiveIndex(activeIndex - 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match with transition duration
  };
  
  // Get visible projects based on active index
  const getVisibleProjects = () => {
    const startIndex = (activeIndex * visibleItems) % projects.length;
    
    // Create an array of the exact length we need
    let visibleProjects = [];
    
    for (let i = 0; i < visibleItems; i++) {
      const projectIndex = (startIndex + i) % projects.length;
      visibleProjects.push(projects[projectIndex]);
    }
    
    return visibleProjects;
  };
  
  // Define focus ring color style
  const getFocusRingStyle = () => {
    return {
      outlineColor: accentColor,
      outlineOffset: '4px'
    };
  };
  
  return (
    <section 
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden" 
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="text-sm uppercase tracking-wider font-medium mb-2 inline-block"
            style={{ color: accentColor }}
          >
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p className="max-w-2xl mx-auto text-lg opacity-80 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative px-8 md:px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Projects Grid */}
          <div 
            ref={carouselRef} 
            className="overflow-hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={activeIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] // Ease out expo for smoother animation
                }}
              >
                {getVisibleProjects().map((project, index) => (
                  <ProjectCard
                    key={`${project.id}-${index}-${activeIndex}`}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    category={project.category}
                    year={project.year}
                    image={project.image}
                    accentColor={accentColor}
                    textColor={textColor}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-xl z-10 transition-all duration-300 hover:scale-105 focus:outline-none"
            style={{ 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)', 
              transform: isHovering ? 'translateY(-50%) translateX(-5px)' : 'translateY(-50%)'
            }}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-xl z-10 transition-all duration-300 hover:scale-105 focus:outline-none"
            style={{ 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)', 
              transform: isHovering ? 'translateY(-50%) translateX(5px)' : 'translateY(-50%)'
            }}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Pagination Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className="focus:outline-none p-1 transition-all"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
            >
              <motion.div
                className="h-2 rounded-full transition-all duration-500"
                initial={false}
                animate={{
                  width: activeIndex === index ? '2rem' : '0.5rem',
                  opacity: activeIndex === index ? 1 : 0.5,
                  backgroundColor: accentColor
                }}
              />
            </button>
          ))}
        </div>
        
        {/* View All Link */}
        {showViewAll && (
          <div className="text-center mt-16">
            <Link 
              href={viewAllLink}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 hover:scale-105 focus:outline-none"
              style={{ 
                backgroundColor: accentColor, 
                color: '#fff', 
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)'
              }}
            >
              {viewAllText}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 1.5,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

// ProjectCard Component
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  category?: string;
  year?: string;
  image?: string;
  accentColor?: string;
  textColor?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  category,
  year,
  image,
  accentColor = "#4ade80",
  textColor = "#3488AE",
  index
}) => {
  return (
    <motion.div
      className="h-full flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white dark:bg-gray-800/50 relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.5
        }
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      style={{
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.07)'
      }}
    >
      {/* Image Section */}
      <div className="h-52 md:h-56 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        {image ? (
          <div className="h-full w-full relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-all duration-500 group-hover:brightness-110"
                quality={90}
              />
            </motion.div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/10 via-gray-200/5 to-gray-100/10 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 text-white/30 transition-all duration-300 group-hover:text-white/40" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        )}
        
        {/* Category overlayed on image */}
        {category && (
          <div className="absolute top-4 left-4 z-20">
            <motion.div
              className="text-xs font-semibold py-1.5 px-4 rounded-full backdrop-blur-md"
              style={{ 
                backgroundColor: `${accentColor}E6`,  // Adding transparency
                color: '#fff'
              }}
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 group-hover:text-opacity-90 transition-all duration-300">{title}</h3>
        
        {/* Description */}
        <p className="text-opacity-75 mb-5 line-clamp-3 text-sm leading-relaxed">{description}</p>
        
        {/* Footer */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200/20">
          {/* Year */}
          {year && (
            <span className="text-sm font-medium" style={{ color: `${textColor}99` }}>
              {year}
            </span>
          )}
          
          {/* Project Link */}
          <Link 
            href={link}
            className="inline-flex items-center text-sm font-medium transition-all duration-300 relative overflow-hidden group-hover:pl-1"
            style={{ color: accentColor }}
          >
            <span>View Project</span>
            <motion.div
              className="ml-2 flex items-center"
              whileHover={{
                x: 3,
                transition: { duration: 0.2 }
              }}
              initial={false}
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;