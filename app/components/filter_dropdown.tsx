"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropDownProps {
  label?: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

const FilterDropDown = ({
  label,
  value,
  options,
  onChange,
}: FilterDropDownProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-slate-700/50 px-4 py-3 pr-10 text-sm font-medium text-gray-500 outline-none transitio"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          strokeWidth={2}
        />
      </div>
    </div>
  );
};

export default FilterDropDown;
