import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'react-icons/fa';

// Stats Component - Where we flex our numbers 💪
const StatsOrganic = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Our awesome stats (no cap!)
  const statsData = [
    {
      id: 'students',
      value: 15000,
      label: 'Happy Students',
      icon: Icons.FaUserGraduate,
      suffix: '+',
      gradient: 'from-blue-500 via-blue-600 to-cyan-600',
      delay: 0
    },
    {
      id: 'success',
      value: 95,
      label: 'Success Rate',
      icon: Icons.FaTrophy,
      suffix: '%',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      delay: 0.1
    },
    {
      id: 'band',
      value: 8.5,
      label: 'Avg Band Score',
      icon: Icons.FaChartLine,
      suffix: '',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      delay: 0.2
    },
    {
      id: 'countries',
      value: 50,
      label: 'Countries',
      icon: Icons.FaGlobe,
      suffix: '+',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      delay: 0.3
    }
  ];

  // Animated counter component - smooth as butter
  const AnimatedCounter = ({ value, suffix, delay }: { value: number; suffix: string; delay: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      const timeout = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2500; // milliseconds
        const increment = end / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
        
        return () => clearInterval(timer);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }, [isInView, value, delay]);
    
    const displayValue = Number.isInteger(value) 
      ? Math.floor(count).toLocaleString()
      : count.toFixed(1);
    
    return (
      <span className="tabular-nums">
        {displayValue}{suffix}
      </span>
    );
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Ambient background with organic feel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Heading with personality */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Numbers That</span>{' '}
            <span className="gradient-text-animated">Speak Louder</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real results from real students. No filters, just facts.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: stat.delay,
                  ease: [0.25, 0.46, 0.45, 0.94] // Organic easing
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card with gradient border on hover */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 h-full overflow-hidden shadow-soft hover:shadow-dreamy transition-all duration-300">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Floating icon */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white mb-4 shadow-lg`}
                  >
                    <Icon className="text-2xl sm:text-3xl" />
                  </motion.div>
                  
                  {/* Counter */}
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                      {isInView && (
                        <AnimatedCounter 
                          value={stat.value} 
                          suffix={stat.suffix}
                          delay={stat.delay}
                        />
                      )}
                    </div>
                    
                    {/* Label */}
                    <p className="text-gray-600 font-medium text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - because why not? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Want to be part of these statistics?
          </p>
          <button className="organic-button inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group">
            <span>Join Now</span>
            <Icons.FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsOrganic;
