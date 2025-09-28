import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as Icons from 'react-icons/fa';

const HeroEnhanced: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const controls = useAnimation();
  
  const rotatingTexts = [
    "Band 9 Score",
    "Dream University",
    "Global Career",
    "Success Story"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.2),transparent_50%)]"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto lg:mx-0 lg:text-left space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <Icons.FaStar className="text-yellow-400 text-sm sm:text-base animate-pulse" />
                <span className="text-white text-xs sm:text-sm font-medium">#1 Rated IELTS Platform</span>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">NEW</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                Achieve Your
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="min-h-[1.4em] sm:min-h-[1.5em] md:min-h-[1.6em] lg:min-h-[1.7em] xl:min-h-[1.8em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
              >
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mt-4 sm:mt-6"
            >
              Join 15,000+ successful students. Master IELTS with AI-powered learning, 
              expert instructors, and guaranteed results.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mt-4 sm:mt-6"
            >
              <div className="flex items-center gap-1.5 bg-blue-500/20 px-3 py-1.5 rounded-full">
                <Icons.FaBookReader className="text-blue-400 text-xs" />
                <span className="text-xs sm:text-sm text-blue-300">500+ Lessons</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-500/20 px-3 py-1.5 rounded-full">
                <Icons.FaClock className="text-purple-400 text-xs" />
                <span className="text-xs sm:text-sm text-purple-300">24/7 Support</span>
              </div>
              <div className="flex items-center gap-1.5 bg-pink-500/20 px-3 py-1.5 rounded-full">
                <Icons.FaGlobe className="text-pink-400 text-xs" />
                <span className="text-xs sm:text-sm text-pink-300">50+ Countries</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8"
            >
              <button className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Free Trial
                  <Icons.FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Icons.FaPlayCircle className="text-lg" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-md mx-auto lg:mx-0 pt-8 sm:pt-10"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  <Icons.FaUserGraduate className="text-blue-400 text-sm sm:text-base" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">15K+</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Students</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  <Icons.FaChartLine className="text-green-400 text-sm sm:text-base" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">95%</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Success</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                  <Icons.FaTrophy className="text-yellow-400 text-sm sm:text-base" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">8.5</p>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">Avg Band</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <motion.div animate={floatingAnimation} className="relative z-10">
              {/* Main Dashboard Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 xl:p-8 border border-white/20 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white text-lg font-semibold">Live Progress Dashboard</h3>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>

                {/* Score Cards Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-400/20"
                  >
                    <div className="text-blue-400 text-sm mb-1">Speaking</div>
                    <div className="text-2xl font-bold text-white mb-2">7.5</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ delay: 1, duration: 1 }}
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-400/20"
                  >
                    <div className="text-purple-400 text-sm mb-1">Writing</div>
                    <div className="text-2xl font-bold text-white mb-2">8.0</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-400/20"
                  >
                    <div className="text-green-400 text-sm mb-1">Reading</div>
                    <div className="text-2xl font-bold text-white mb-2">8.5</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1.4, duration: 1 }}
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl p-4 border border-yellow-400/20"
                  >
                    <div className="text-yellow-400 text-sm mb-1">Listening</div>
                    <div className="text-2xl font-bold text-white mb-2">9.0</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '90%' }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Activity Chart */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white text-sm mb-3 font-medium">Weekly Activity</div>
                  <div className="flex items-end justify-between h-20 gap-2">
                    {[60, 80, 45, 90, 70, 85, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <span key={i} className="text-xs text-gray-400">{day}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <Icons.FaStar className="text-yellow-300" />
                  <span className="text-sm font-bold">Band 9 Achiever!</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <Icons.FaTrophy className="text-yellow-300" />
                  <span className="text-sm font-bold">Top Performer</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block lg:hidden mt-8"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-sm font-semibold">Your Progress</h3>
                <div className="bg-green-400 text-green-900 text-xs px-2 py-1 rounded-full font-bold">Live</div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-blue-400 text-xs mb-1">Speaking</div>
                  <div className="text-white font-bold">7.5</div>
                </div>
                <div>
                  <div className="text-purple-400 text-xs mb-1">Writing</div>
                  <div className="text-white font-bold">8.0</div>
                </div>
                <div>
                  <div className="text-green-400 text-xs mb-1">Reading</div>
                  <div className="text-white font-bold">8.5</div>
                </div>
                <div>
                  <div className="text-yellow-400 text-xs mb-1">Listening</div>
                  <div className="text-white font-bold">9.0</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="text-white/50 text-sm">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mt-2 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroEnhanced;
