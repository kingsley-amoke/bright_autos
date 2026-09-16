import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WarrantyHero from "./hero";
import OverviewSection from "./overview";
import CoverageSection from "./coverage";

const WarrantyPlans = () => {
  return (
    <div>
      <Header />
      <section className="w-full bg-white text-slate-800 antialiased">
        <WarrantyHero />
      </section>
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <OverviewSection />
      </section>
      <section className="py-16 sm:py-20">
        <CoverageSection />
      </section>
      <Footer />
    </div>
  );
};

export default WarrantyPlans;
