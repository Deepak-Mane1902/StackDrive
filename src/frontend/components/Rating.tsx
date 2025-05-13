"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Sarah T", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 4 },
  { name: "John D", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Tommy H", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Michael", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 4 },
  { name: "Emily W", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Raj K", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 4 },
  { name: "Laura P", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Ahmed Z", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files..", rating: 5 },
  { name: "Nina S", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Carlos M", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
  { name: "Priya G", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 4 },
  { name: "Daniel R", message: "I've been using StackDrive for months now and it's completely transformed the way I manage my files.", rating: 5 },
];

const CARDS_PER_PAGE = 4;
const totalSlides = Math.ceil(testimonials.length / CARDS_PER_PAGE);

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getCurrentCards = () => {
    const start = currentSlide * CARDS_PER_PAGE;
    return testimonials.slice(start, start + CARDS_PER_PAGE);
  };

  const goToNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    resetAutoplay(); // reset interval on manual change
  };

  const resetAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNextSlide, 5000);
  };

useEffect(() => {
  const interval = setInterval(goToNextSlide, 5000);
  intervalRef.current = interval;

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, []);


  return (
    <section className="w-full bg-[#101010] text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[25vw] sm:text-[3vw] font-extrabold px-30 text-start mb-10 tracking-tight">
          Join the thousands of statisfied StackDrive today <br /> and see What Our Users Say!
        </h2>

        <div className="relative min-h-[300px] sm:min-h-[320px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 absolute w-full"
            >
              {getCurrentCards().map((testimonial, index) => (
                <article
                  key={index}
                  className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  <p className="text-sm sm:text-base mb-4 line-clamp-5">{testimonial.message}</p>
                  <footer>
                    <p className="font-semibold mb-2 text-sm sm:text-base">- {testimonial.name}</p>
                    <div className="flex text-yellow-400" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                      {[...Array(5)].map((_, i) =>
                        i < testimonial.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                      )}
                    </div>
                  </footer>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <nav className="flex justify-center gap-3 mt-4" aria-label="Testimonials pagination">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-10 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "bg-orange-500" : "bg-white/30 hover:bg-white/50"
              }`}
            ></button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default TestimonialSlider;
