import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
  stats?: string;
}

const FeaturesCarousel: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "AI-Powered Speaking",
      description: "Practice with our advanced AI that simulates real IELTS speaking tests with instant feedback.",
      icon: <Icons.FaMicrophone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      stats: "10K+ Practice Sessions Daily"
    },
    {
      id: 2,
      title: "Smart Mock Tests",
      description: "Adaptive tests that adjust to your skill level with detailed analytics.",
      icon: <Icons.FaFileAlt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-purple-500 to-pink-600",
      stats: "500+ Mock Tests Available"
    },
    {
      id: 3,
      title: "AI Band Predictor",
      description: "Machine learning powered instant band score predictions with personalized study plans.",
      icon: <Icons.FaBrain className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-orange-500 to-red-600",
      stats: "95% Accuracy Rate"
    },
    {
      id: 4,
      title: "Live Expert Classes",
      description: "Interactive sessions with certified IELTS experts and 1-on-1 guidance.",
      icon: <Icons.FaChalkboardTeacher className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-green-500 to-teal-600",
      stats: "24/7 Expert Support"
    },
    {
      id: 5,
      title: "Fast-Track Program",
      description: "Master all modules in just 30 days with our intensive accelerated program.",
      icon: <Icons.FaRocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-indigo-500 to-blue-600",
      stats: "30-Day Success Path"
    },
    {
      id: 6,
      title: "Success Guarantee",
      description: "Get your target band score or receive additional coaching absolutely free.",
      icon: <Icons.FaCertificate className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-pink-500 to-rose-600",
      stats: "100% Money Back Guarantee"
    },
    {
      id: 7,
      title: "Mobile Learning",
      description: "Learn on-the-go with our mobile app. Practice anywhere, anytime.",
      icon: <Icons.FaBook className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-teal-500 to-cyan-600",
      stats: "iOS & Android Apps"
    },
    {
      id: 8,
      title: "24/7 Support",
      description: "Get instant help from our support team and AI assistant anytime.",
      icon: <Icons.FaUserGraduate className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      gradient: "from-violet-500 to-purple-600",
      stats: "< 2 Min Response Time"
    }
  ];

  return (
    <section id="features" className="py-10 sm:py-14 md:py-18 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2 bg-purple-100 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achieve Band 9
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Cutting-edge technology meets expert instruction in our comprehensive IELTS preparation platform
          </p>
        </motion.div>

        {/* Mobile/Tablet Carousel (visible on smaller screens) */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay, EffectCards]}
            effect="cards"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            cardsEffect={{
              perSlideOffset: 8,
              perSlideRotate: 4,
              rotate: true,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
            className="features-swiper pb-12"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl h-full overflow-hidden group">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    {/* Card Content */}
                    <div className="relative p-6 sm:p-8 h-full flex flex-col">
                      {/* Icon Container */}
                      <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-4 sm:mb-5 shadow-lg self-start`}>
                        {feature.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                        {feature.description}
                      </p>

                      {/* Stats Badge */}
                      {feature.stats && (
                        <div className={`inline-flex items-center text-xs sm:text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                          <span className="mr-2">•</span>
                          {feature.stats}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid (visible on large screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                
                {/* Card Content */}
                <div className="relative p-6 lg:p-7 xl:p-8 h-full flex flex-col">
                  {/* Icon Container with animation */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl self-start`}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  {feature.stats && (
                    <div className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                      <span className="mr-2 group-hover:mr-3">•</span>
                      {feature.stats}
                    </div>
                  )}

                  {/* Learn More Link */}
                  <button className={`inline-flex items-center mt-4 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? 
            <span className="block sm:inline sm:ml-1 font-semibold text-purple-600">We have much more!</span>
          </p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore All Features
            <Icons.FaRocket className="text-sm sm:text-base" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
