"use client";

import Image from "next/image";
import PrimaryButton from "../components/primary_button";
import { useRouter } from "next/navigation";

const WarrantyHero = () => {
  const router = useRouter();
  return (
    <section className="bg-[#FAF7F2] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Warranty &<br />
              Protection
            </h1>
            <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">
              Peace Of Mind Wherever You Drive
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Drive secure knowing that you are fully protected. Our flexible
              warranty parameters cover essential hardware breakdowns,
              mechanical processing flaws, and routine roadside emergency
              occurrences.
            </p>
            <PrimaryButton onClick={() => router.push("#warranty-plans")}>
              Choose A Plan
            </PrimaryButton>
          </div>

          <div className="flex-1 max-w-md w-full aspect-square relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl">
            <Image
              src="/assets/images/warranty.jpg"
              alt="Warranty Protection Shield Layout"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyHero;
