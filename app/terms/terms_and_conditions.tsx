"use client";

import { TermsSection } from "../types/terms";

interface TermsAndConditionsProps {
  title?: string;
  subtitle?: string;
  sections: Array<TermsSection>;
  onBackClick?: () => void;
  contactEmail?: string;
  contactWebsite?: string;
}

export default function TermsAndConditions({
  title = "TERMS & CONDITIONS",
  subtitle = "About",
  sections,
  contactEmail = "support@yourdomain.com",
  contactWebsite = "://yourdomain.com",
}: TermsAndConditionsProps) {
  const isStringArray = (list: any): list is string[] => {
    return (
      Array.isArray(list) && (list.length === 0 || typeof list[0] === "string")
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-orange-100 p-12">
      {/* <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackClick}
            className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
            aria-label="Go Back"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span>{subtitle}</span>
          </button>
        </div>
      </header> */}

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="border-b border-slate-200 pb-6 text-center">
          <h1 className="text-xl font-bold tracking-wider text-slate-900 sm:text-2xl uppercase">
            {title}
          </h1>
        </div>

        <div className="mt-8 space-y-10 sm:mt-12 sm:space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 transition-opacity duration-300"
            >
              <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                {section.title}
              </h2>

              {section.contentBeforeList && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.contentBeforeList}
                </p>
              )}

              {section.list && isStringArray(section.list) && (
                <ul className="mt-4 list-inside list-disc space-y-2 pl-2 text-sm text-slate-600 sm:pl-4 sm:text-base">
                  {section.list.map((item: string, index: number) => (
                    <li key={index} className="leading-relaxed">
                      <span className="ml-1 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.contentAfterList && (
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {section.contentAfterList}
                </p>
              )}
            </section>
          ))}

          <section
            id="contact-us"
            className="scroll-mt-24 border-t border-slate-100 pt-8 sm:pt-10"
          >
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              11. Contact Us
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              If you have any questions regarding these terms, you can get in
              touch through our standard support channels:
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-600 sm:text-base">
              <p>
                <span className="font-semibold text-slate-800">Email:</span>{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-orange-600 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-800">Portal:</span>{" "}
                <a
                  href={`https://${contactWebsite}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline"
                >
                  {contactWebsite}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Global Footer Subtext Context Branding */}
        <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-[11px] text-slate-400 sm:text-xs">
          <p>
            © {new Date().getFullYear()} Automotive Corporation Systems. We are
            committed to securing programmatic user communication procedures
            across our community portal structures.
          </p>
        </footer>
      </main>
    </div>
  );
}
