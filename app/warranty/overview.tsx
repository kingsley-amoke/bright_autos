import { Clock, Shield, Wrench } from "lucide-react";
import React from "react";
import { warrantyOverviewData } from "../constants/warranty";

const OverviewSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Warranty Overview
      </h2>
      <p className="mt-2 text-xs font-medium text-slate-500">
        Explore core operational security parameters across our structural
        components.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {warrantyOverviewData.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center p-8 rounded-xl border ${card.bgColorClass} shadow-sm transition-transform hover:-translate-y-0.5`}
          >
            <DynamicIcon
              name={card.icon}
              className="h-8 w-8 mb-4 stroke-[1.5]"
            />
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {card.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewSection;

function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "shield":
      return <Shield className={className} />;
    case "wrench":
      return <Wrench className={className} />;
    case "clock":
      return <Clock className={className} />;
    default:
      return <Shield className={className} />;
  }
}
