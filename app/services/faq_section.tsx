"use client";

import React from "react";

const FAQSection = () => {
  return (
    <section className="w-full p-12 my-12 bg-slate-200">
      <div className="text-center">
        <p className="text-xs font-bold tracking-wide text-orange-500 uppercase">
          got question?
        </p>

        <h2 className="mx-auto mt-2 max-w-md text-3xl font-extrabold leading-tight text-slate-900">
          Frequently Asking Questions
        </h2>
      </div>
      <FaqAccordion
        items={[
          {
            question: "How long does a typical service appointment take?",
            answer: "...",
          },
          {
            question: "Can I schedule service for a vehicle I didn't buy here?",
            answer: "...",
          },
          {
            question: "How long does a typical service appointment take?",
            answer: "...",
          },
          {
            question: "Can I schedule service for a vehicle I didn't buy here?",
            answer: "...",
          },
          {
            question: "How long does a typical service appointment take?",
            answer: "...",
          },
          {
            question: "Can I schedule service for a vehicle I didn't buy here?",
            answer: "...",
          },
        ]}
        defaultOpenIndex={2}
      />
    </section>
  );
};

export default FAQSection;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqAccordion({
  items = [],
  defaultOpenIndex = -1,
}: {
  items: Array<{ question: string; answer: string }>;
  defaultOpenIndex: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-xl border transition-colors ${
              isOpen
                ? "border-slate-200 bg-slate-100"
                : "border-slate-200 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className={`text-sm ${
                  isOpen
                    ? "font-bold text-slate-900"
                    : "font-medium text-slate-600"
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            <div
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-slate-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
