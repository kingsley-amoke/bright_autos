"use client";

import HeroBgImage from "../components/hero_bg_image";

import PrimaryButton from "../components/primary_button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import bgHero from "@/public/assets/images/about.jpg";

const AboutHero = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center py-20 min-h-[600px] w-full overflow-hidden">
      <HeroBgImage bgHero={bgHero} />
      <div className="relative z-10 text-center flex flex-col gap-4 text-white p-12 w-1/2">
        <h2 className="text-5xl font-bold text-orange-200/70">About Us</h2>

        <div className="my-4 ">
          <p>
            For years, we have been helping drivers find the right vehicle with
            confidence. From quality vehicles and flexible financing to expert
            servicing and long-term support, we are committed to making every
            step of your automotive journey simple, transparent, and
            exceptional.
          </p>
        </div>

        <div className="flex gap-4 justify-center mt-4">
          <PrimaryButton
            onClick={() => router.push("/contact")}
            className="flex gap-4 justify-center items-center"
          >
            <p>See More</p>
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
