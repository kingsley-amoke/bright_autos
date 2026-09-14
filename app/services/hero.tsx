"use client";

import React from "react";
import PrimaryButton from "../components/primary_button";
import SecondaryButton from "../components/secondary_button";
import { ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import bgHero from "@/public/assets/images/services.jpg";
import HeroBgImage from "../components/hero_bg_image";

const ServicesHero = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex flex-col items-start justify-center py-20 min-h-[600px] w-full overflow-hidden">
      <HeroBgImage bgHero={bgHero} />

      <div className="relative z-10 text-center flex flex-col gap-4 text-white p-12">
        <h2 className="text-5xl font-bold">Every Service</h2>
        <h2 className="text-5xl font-bold">You Need.</h2>
        <h2 className="text-5xl font-bold text-orange-200/70">One Place.</h2>

        <div className="my-4 text-gray-600">
          <p>
            From financing to full-service maintenance, we handle every aspect
          </p>
          <p>of car ownership so you can focus on the road ahead. </p>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <PrimaryButton
            onClick={() => router.push("/contact")}
            className="flex gap-4 justify-center items-center"
          >
            <p>Schedule Service</p>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </PrimaryButton>
          <SecondaryButton
            onClick={() => {}}
            className="flex gap-2 justify-center items-center"
          >
            <Phone />
            <p>Call Us</p>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
