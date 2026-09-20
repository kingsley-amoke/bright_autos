import React from "react";
import { Form } from "../types/form";
import {
  User,
  Mail,
  Phone,
  Car,
  Hash,
  MessageSquare,
  Briefcase,
  LucideIcon,
} from "lucide-react";

const TextField = ({
  field,
  value,
  onChange,
}: {
  field: Form;
  value: string;
  onChange: (name: string, value: string) => void;
}) => {
  const spanClass = field.span === "full" ? "sm:col-span-2" : "sm:col-span-1";
  const baseInputClass =
    "w-full rounded-lg border border-slate-200 bg-white py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100";
  return (
    <div className={spanClass}>
      {field.label && (
        <label
          htmlFor={field.name}
          className="mb-1.5 block text-sm font-medium text-slate-600"
        >
          {field.label}
          {field.required && <span className="text-orange-500"> *</span>}
        </label>
      )}

      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          rows={4}
          value={value ?? ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={`${baseInputClass} px-3.5 resize-none`}
        />
      ) : field.type === "select" ? (
        <select
          id={field.name}
          name={field.name}
          required={field.required}
          value={value ?? ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={`${baseInputClass} px-3.5 text-slate-600`}
        >
          <option value="" disabled>
            {field.placeholder ?? "Select an option"}
          </option>
          {(field.options ?? []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : field.type === "radio" ? (
        <div className="flex flex-wrap gap-2">
          {(field.options ?? []).map((opt) => {
            const isSelected = value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(field.name, opt.value)}
                className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-orange-400 bg-orange-50 text-orange-600"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {opt.icon && (
                  <FieldIcon name={opt.icon} className="h-3.5 w-3.5" />
                )}
                {opt.label}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="relative">
          {field.icon && (
            <FieldIcon
              name={field.icon}
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
          )}
          <input
            id={field.name}
            name={field.name}
            type={field.type ?? "text"}
            required={field.required}
            placeholder={field.placeholder}
            value={value ?? ""}
            onChange={(e) => onChange(field.name, e.target.value)}
            className={`${baseInputClass} ${field.icon ? "pl-9 pr-3.5" : "px-3.5"}`}
          />
        </div>
      )}
    </div>
  );
};

export default TextField;

type IconKey =
  | "user"
  | "mail"
  | "phone"
  | "car"
  | "hash"
  | "message"
  | "briefcase";

const ICONS: Record<IconKey, LucideIcon> = {
  user: User,
  mail: Mail,
  phone: Phone,
  car: Car,
  hash: Hash,
  message: MessageSquare,
  briefcase: Briefcase,
};

function FieldIcon({ name, className }: { name: string; className?: string }) {
  if (!(name in ICONS)) return null;
  const Icon = ICONS[name as IconKey];
  return <Icon className={className} strokeWidth={2} />;
}
