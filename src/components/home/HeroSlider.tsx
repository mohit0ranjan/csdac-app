'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Generates an array of 10 slides referencing the provided banner images
const slides = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  image: `/img/banner/${i + 1}.jpg`,
  title: `CSDAC Banner ${i + 1}`
}));

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative flex flex-col">
      {/* Slider Area */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-[#0c1322] overflow-hidden group">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative h-full">
              {/* Displaying the banner image */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 hover:bg-black/60 transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 hover:bg-black/60 transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-cyan-400 scale-110' : 'bg-cyan-800/80 hover:bg-cyan-600'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ticker Bar directly under slider */}
      <div data-aos="fade-up" className="bg-[#666666] text-white py-2 text-sm font-bold flex justify-center items-center space-x-6 border-b-4 border-gray-300">
        <span>"HUNT. HACK.SECURETHEBOSSOS."</span>
        <span>|</span>
        <span>Registration Link: <a href="https://ssm.cdac.in" className="hover:underline">https://ssm.cdac.in</a></span>
        <span>|</span>
        <span>Contact: ssm-bugbounty@cdac.in, ssm-os@cdac.in</span>
      </div>
    </div>
  );
}
