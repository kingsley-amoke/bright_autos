import React from "react";
import { Testimonial } from "../types/testimony";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative bg-white pt-20 px-6 pb-8 rounded-t-xl border border-slate-200/60 shadow-sm flex flex-col max-w-[320px] transition-all duration-300 hover:shadow-md">
      {/* Profile Image - Halfway inside the card */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
        />
      </div>

      <div className="flex flex-col items-center gap-1 mb-2">
        <h4 className="text-sm font-bold text-slate-900 leading-tight">
          {testimonial.name}
        </h4>

        <p className="text-xs text-slate-400 font-medium">
          {testimonial.title}
        </p>
      </div>

      <div className="flex-1">
        <span className="text-3xl font-serif text-slate-300 block leading-none mb-1">
          “
        </span>

        <p className="text-slate-600 text-sm italic leading-relaxed">
          {testimonial.content}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
