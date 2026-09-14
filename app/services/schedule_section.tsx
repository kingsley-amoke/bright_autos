import React from "react";

const ScheduleSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-12 bg-slate-200">
      <ProcessSteps
        eyebrow="Scheduling Service"
        heading="Three Steps to Done"
        steps={serviceSteps}
      />
    </div>
  );
};

export default ScheduleSection;

import { Calendar, Coffee, Check, LucideIcon } from "lucide-react";
import { ServiceStep } from "../types/service_step";
import { serviceSteps } from "../constants/service_steps";

const STEP_ICONS: Record<ServiceStep["icon"], LucideIcon> = {
  calendar: Calendar,
  coffee: Coffee,
  check: Check,
};

function ProcessSteps({
  eyebrow,
  heading,
  steps = [],
}: {
  eyebrow: string;
  heading: string;
  steps: Array<ServiceStep>;
}) {
  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-12 shadow-sm sm:px-10">
      <div className="text-center">
        {eyebrow && (
          <p className="text-xs font-bold tracking-wide text-orange-500">
            {eyebrow.toUpperCase()}
          </p>
        )}
        {heading && (
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            {heading}
          </h2>
        )}
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
        <div
          className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-slate-200 sm:block"
          style={{
            marginLeft: "16.666%",
            marginRight: "16.666%",
          }}
          aria-hidden="true"
        />

        {steps.map((step, i) => {
          const Icon = STEP_ICONS[step.icon] ?? Check;
          const number = i + 1;

          return (
            <div
              key={step.title ?? i}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#111827]">
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white ring-4 ring-white">
                  {number}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
