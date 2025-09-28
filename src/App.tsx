import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroEnhanced from './components/HeroEnhanced';
import FeaturesCarousel from './components/FeaturesCarousel';
import StatsOrganic from './components/StatsOrganic';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

// Main App - written by a human who loves gradients and smooth transitions :)
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Loading timer - gives that premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // slightly faster, feels snappier
    
    return () => clearTimeout(timer);
  }, []);

  // Track scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global gradient mesh background - Very subtle */}
      <div className="fixed inset-0" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/95 to-white/98"></div>
      </div>
      
      {/* Navbar with proper z-index */}
      <div className="relative" style={{ zIndex: 50 }}>
        <Navbar />
      </div>
      
      <main className="relative">
        {/* Hero Section with proper spacing */}
        <div className="relative">
          <HeroEnhanced />
          {/* Professional wave transition - no overlap */}
          <div className="absolute -bottom-1 left-0 right-0 h-24 pointer-events-none" style={{ zIndex: 1 }}>
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path 
                d="M0,40 C320,80 640,20 960,50 C1280,80 1360,60 1440,40 L1440,100 L0,100 Z" 
                fill="url(#gradient-wave-professional)" 
                opacity="0.4"
              />
              <defs>
                <linearGradient id="gradient-wave-professional" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(99, 102, 241, 0.08)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.02)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Stats with professional spacing */}
        <div className="relative mt-16 sm:mt-20 md:mt-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
          <StatsOrganic />
        </div>

        {/* Features with proper separation */}
        <div className="relative mt-8 sm:mt-12">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></div>
          <FeaturesCarousel />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Testimonials with clean background */}
        <div className="relative mt-8 sm:mt-12 bg-gradient-to-b from-white via-purple-50/10 to-white">
          <TestimonialsCarousel />
        </div>

        {/* CTA with professional gradient */}
        <div className="relative mt-8 sm:mt-12">
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <CTA />
        </div>

        {/* Footer with proper transition */}
        <div className="relative mt-0">
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-gray-900"></div>
          <Footer />
        </div>
      </main>
      
      <ScrollToTop />
      
      {/* Subtle ambient lighting - properly positioned */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -2 }}>
        {/* Top left subtle glow */}
        <div 
          className="absolute w-[500px] h-[500px] -top-48 -left-48 rounded-full opacity-[0.02]"
          style={{ 
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.02}px)`,
            filter: 'blur(120px)'
          }}
        />
        
        {/* Bottom right subtle glow */}
        <div 
          className="absolute w-[500px] h-[500px] -bottom-48 -right-48 rounded-full opacity-[0.02]"
          style={{ 
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)',
            transform: `translateY(-${scrollY * 0.02}px)`,
            filter: 'blur(120px)'
          }}
        />
        
        {/* Center accent - very subtle */}
        <div 
          className="absolute w-[400px] h-[400px] top-1/2 left-1/2 rounded-full opacity-[0.015]"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 60%)',
            transform: `translate(-50%, calc(-50% + ${scrollY * 0.01}px))`,
            filter: 'blur(100px)'
          }}
        />
      </div>
    </div>
  );
}

export default App;