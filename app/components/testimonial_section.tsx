"use client";

import { useState } from "react";
import { testimonials } from "../db/testimonials";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import TestimonialCard from "./testimonial_card";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + 1,
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  return (
    <div className="bg-slate-100 w-full p-16 flex flex-col items-center justify-center text-black rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-8">Testimonials</h3>

      <div className="flex items-center justify-center gap-4 mb-8">
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

      {/* Pagination Dots (Optional representation of current page) */}
      <div className="flex gap-2">
        {Array.from({
          length: Math.ceil(testimonials.length / itemsPerPage),
        }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? "bg-gray-800 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Render only the sliced subset */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {visibleTestimonials.map((testimonial) => (
         <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
