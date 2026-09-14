"use client";

import { useState } from "react";
import { testimonials } from "../constants/testimonials";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TestimonialCard from "./testimonial_card";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const itemsPerPage = 3;

  const handlePrev = () => {
    setDirection(-1);

    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);

    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1,
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-slate-200 w-full p-16 flex flex-col items-center justify-center text-black rounded-lg">
      <h3 className="text-2xl font-bold mb-8">Testimonials</h3>

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-4">
          <ChevronLeftIcon
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black transition-colors"
            onClick={handlePrev}
          />

          <p className="mx-4 text-center">What Our Clients Say About Us</p>

          <ChevronRightIcon
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black transition-colors"
            onClick={handleNext}
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mt-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-5 h-2 bg-gray-800"
                  : "w-2 h-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative w-full max-w-[1040px] overflow-visible mt-12">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex flex-wrap items-center justify-center lg:gap-16 sm:gap-32 "
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={
                  index === 0 ? "left" : index === 1 ? "center" : "right"
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
