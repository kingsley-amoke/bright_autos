"use client";

import React, { useState } from "react";

import { Form } from "../types/form";
import TextField from "./text_field";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FormSection {
  id: string;
  title: string;
  fields: Form[];
}

interface ContactFormProps {
  sections?: FormSection[];
  onSubmit: (values: Record<string, string>) => void | Promise<void>;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  sections = [],
  onSubmit,
}: ContactFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-10 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
          <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={2.5} />
        </div>
        <p className="mt-3 text-sm font-semibold text-emerald-700">
          Message Sent Successfully
        </p>
        <p className="mt-1 max-w-sm text-xs text-emerald-600">
          Thank you for reaching out. A member of our team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-bold tracking-wide text-orange-500">
          — Get in Touch
        </p>
        <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
          Send Us a Message
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
          Have a question about our inventory, financing, or trade-in value?
          Fill out the form below and our dedicated automotive team will reach
          out shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {sections.map((section, i) => (
          <div key={section.id ?? i}>
            {section.title && (
              <div className="mb-3 flex items-center gap-2">
                <p className="text-xs font-bold tracking-wide text-orange-500">
                  {section.title.toUpperCase()}
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(section.fields ?? []).map((field) => (
                <TextField
                  key={field.name}
                  field={field}
                  value={values[field.name]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:opacity-60 sm:w-auto sm:self-start sm:px-8"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {status === "error" && (
          <p className="text-xs font-medium text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
