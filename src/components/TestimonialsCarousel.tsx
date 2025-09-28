import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaUserGraduate, FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Testimonial {
  id: number;
  name: string;
  score: string;
  image: string;
  review: string;
  country: string;
  date: string;
  program: string;
}

const TestimonialsCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      score: "Band 8.5",
      image: "PS",
      review: "The AI-powered practice tests were incredibly helpful! I improved my score from 6.5 to 8.5 in just 2 months. The personalized feedback and structured approach made all the difference for my Canadian PR application.",
      country: "India",
      date: "March 2024",
      program: "Premium Plan"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      score: "Band 9.0",
      image: "AM",
      review: "Outstanding platform! As an engineer aiming for Australia, I needed Band 8+. The expert essay reviews and speaking practice helped me achieve Band 9. Best investment for my career!",
      country: "India",
      date: "February 2024",
      program: "Elite Program"
    },
    {
      id: 3,
      name: "Li Wei",
      score: "Band 8.0",
      image: "LW",
      review: "The structured learning path and quality content are exceptional. Mock tests mirror the actual exam perfectly. Achieved my target score for UK university admission.",
      country: "China",
      date: "January 2024",
      program: "Premium Plan"
    },
    {
      id: 4,
      name: "Neha Reddy",
      score: "Band 7.5",
      image: "NR",
      review: "From Band 5.5 to 7.5 in 6 weeks! The daily practice sessions and instant AI feedback transformed my preparation. Special thanks to the amazing support team.",
      country: "India",
      date: "March 2024",
      program: "Standard Plan"
    },
    {
      id: 5,
      name: "Aditya Kumar",
      score: "Band 8.5",
      image: "AK",
      review: "The 1-on-1 mentorship was a game-changer. My mentor helped me overcome speaking anxiety and master complex writing tasks. Worth every penny!",
      country: "India",
      date: "February 2024",
      program: "Elite Program"
    },
    {
      id: 6,
      name: "Ananya Patel",
      score: "Band 8.0",
      image: "AP",
      review: "Perfect for working professionals! The flexible schedule and mobile app allowed me to prepare during commute. Achieved my dream score for New Zealand immigration.",
      country: "India",
      date: "January 2024",
      program: "Premium Plan"
    }
  ];

  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
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
          <span className="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            Real Success Stories
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              From Real Students
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of successful students who achieved their dream scores with IELTS Excellence
          </p>
        </motion.div>

        {/* Mobile Carousel (visible on small screens) */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl shadow-xl p-6 mx-2 h-full">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-3xl text-purple-100 mb-4" />
                  
                  {/* User Info */}
                  <div className="flex items-start mb-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 flex-shrink-0">
                      {testimonial.image}
                    </div>
                    
                    {/* Name and Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold">
                          {testimonial.score}
                        </span>
                        <span className="text-gray-500 text-xs">{testimonial.country}</span>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="flex items-center bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      <FaCheckCircle className="w-3 h-3 mr-1" />
                      <span className="text-xs font-semibold">Verified</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed italic line-clamp-4">
                    "{testimonial.review}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-xs">
                      <span className="text-gray-500">Program:</span>
                      <span className="ml-1 font-semibold text-purple-600">{testimonial.program}</span>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="swiper-button-prev-custom w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Desktop Grid (visible on large screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                
                {/* Card Content */}
                <div className="relative p-6 lg:p-8">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-purple-100" />
                  
                  {/* User Info */}
                  <div className="flex items-start mb-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                      {testimonial.image}
                    </div>
                    
                    {/* Name and Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-1">{testimonial.name}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold">
                          {testimonial.score}
                        </span>
                        <span className="text-gray-500">{testimonial.country}</span>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                      <FaCheckCircle className="w-3 h-3" />
                      <span className="font-semibold">Verified</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t pt-4">
                    {/* Program Badge */}
                    <div className="text-sm">
                      <span className="text-gray-500">Program:</span>
                      <span className="ml-2 font-semibold text-purple-600">{testimonial.program}</span>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400 text-xl" />
              <span className="text-gray-700 font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <FaUserGraduate className="text-blue-600 text-xl" />
              <span className="text-gray-700 font-semibold">15,000+ Success Stories</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <FaTrophy className="text-purple-600 text-xl" />
              <span className="text-gray-700 font-semibold">95% Achievement Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
