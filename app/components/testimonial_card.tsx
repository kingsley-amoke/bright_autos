import React from "react";
import { Testimonial } from "../types/testimony";

type CardPosition = "left" | "center" | "right";

const TestimonialCard = ({
  testimonial,
  position = "center",
}: {
  testimonial: Testimonial;
  position?: CardPosition;
}) => {
  const styles = {
    left: {
      card: "-rotate-3 min-h-[300px]",
      back: "rotate-1 translate-x-1 translate-y-4",
      image: "w-24 h-24",
    },
    center: {
      card: "rotate-0 min-h-[350px]",
      back: "-rotate-2 translate-x-2 translate-y-3",
      image: "w-28 h-28",
    },
    right: {
      card: "rotate-3 min-h-[300px]",
      back: "-rotate-1 -translate-x-1 translate-y-4",
      image: "w-24 h-24",
    },
  };

  const currentStyle = styles[position];

  return (
    <div
      className={`
        relative
        w-[300px]
        ${currentStyle.card}
        transition-transform
        duration-300
      `}
    >
      {/* Dark navy shape behind the card */}
      <div
        className={`
          absolute
          inset-0
          rounded-[35px]
          bg-[#172033]
          ${currentStyle.back}
        `}
      />

      {/* Main Card */}
      <div
        className={`
          relative
          h-full
          bg-white
          rounded-[35px]
          border
          border-slate-200/60
          shadow-sm
          flex
          flex-col
          items-center
          px-6
          ${position === "center" ? "pt-28 pb-12" : "pt-24 pb-10"}
        `}
      >
        {/* Profile Image */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className={`
              ${currentStyle.image}
              rounded-full
              object-cover
              ring-4
              ring-white
              shadow-md
            `}
          />
        </div>

        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <h4
            className={`
              font-bold
              text-slate-800
              leading-tight
              ${position === "center" ? "text-xl" : "text-lg"}
            `}
          >
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500 mt-1">{testimonial.title}</p>
        </div>

        {/* Quote */}
        <span
          className={`
            font-serif
            font-bold
            text-slate-800
            leading-none
            ${position === "center" ? "text-5xl mt-3" : "text-4xl mt-2"}
          `}
        >
          “
        </span>

        {/* Testimonial Content */}
        <p
          className={`
            text-slate-600
            text-center
            leading-relaxed
            ${position === "center" ? "text-sm" : "text-xs"}
          `}
        >
          {testimonial.content}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
