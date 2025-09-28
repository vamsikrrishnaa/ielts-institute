import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

const CTA: React.FC = () => {
  const benefits = [
    "30-Day Money Back Guarantee",
    "1-on-1 Expert Mentorship",
    "Lifetime Access to Materials",
    "Free Mock Test Every Week"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] bg-[length:200%_200%] animate-shimmer"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                <Icons.FaRocket className="mr-2" />
                <span>Limited Time Offer - 50% Off</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Start Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  IELTS Success Journey?
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
                Join over 15,000 students who achieved their dream scores. 
                Start your preparation today and get instant access to all premium features.
              </p>

              {/* Benefits List */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-white"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center mr-3">
                      <Icons.FaCheck className="w-3 h-3 text-green-900" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-300">
                {/* Badge */}
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full">
                    MOST POPULAR
                  </span>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl sm:text-2xl text-gray-500 line-through">₹9,999</span>
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-bold rounded">50% OFF</span>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">₹4,999</span>
                    <span className="text-sm sm:text-base text-gray-600 ml-2">/3 months</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Icons.FaCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Access to all 4 modules</span>
                  </div>
                  <div className="flex items-start">
                    <Icons.FaCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">500+ practice questions</span>
                  </div>
                  <div className="flex items-start">
                    <Icons.FaCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">AI-powered band prediction</span>
                  </div>
                  <div className="flex items-start">
                    <Icons.FaCheck className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Personal study plan</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                    <span>Start Free Trial</span>
                    <Icons.FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    No credit card required • Cancel anytime
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
