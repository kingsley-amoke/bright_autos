"use client";

import React from "react";
import PrimaryButton from "./primary_button";
import SecondaryButton from "./secondary_button";
import SearchBar from "./search_bar";
import Image from "next/image";

import bgHero from "@/public/assets/images/hero.png";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center py-20 min-h-[600px] w-full overflow-hidden">
      <Image
        src={bgHero}
        alt="Background Image"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        priority
        className="blur-sm"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div className="relative z-10 text-center flex flex-col gap-4 text-white">
        <h2 className="text-5xl font-bold">Find Your Next Car With</h2>
        <h2 className="text-5xl font-bold">Confidence</h2>

        <div className="my-4 text-gray-200">
          <p>Explore our curated selection of premium vehicles,</p>
          <p>backed by transparent pricing and exceptional customer service.</p>
        </div>

        <SearchBar handleSearch={() => {}} />

        <div className="flex gap-4 justify-center mt-4">
          <PrimaryButton onClick={() => router.push("inventory")}>
            <p>Browse Inventory</p>
          </PrimaryButton>
          <SecondaryButton onClick={() => {}}>
            Sell/Trade Your Car
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
